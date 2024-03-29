import { join } from "node:path";

import { BrowserView, BrowserWindow } from "electron";
import { z } from "zod";

import { publicProcedure } from "./trpc-server";

import type { BrowserViewConstructorOptions, Rectangle } from "electron";

const SHOW_DEVTOOLS = import.meta.env.DEV && !E2E;

export default function routesViews() {
	return {
		showBrowserView: publicProcedure
			.input(showBrowserViewSchema)
			.mutation(({ input }) => {
				const view = new BrowserView({
					...input.browserViewOptions,
					webPreferences: {
						devTools: SHOW_DEVTOOLS,
						preload: join(__dirname, "../preload/web.cjs"),
						...input.browserViewOptions?.webPreferences,
					},
				});
				const focusedWindow = BrowserWindow.getFocusedWindow();
				const viewId = view.webContents.id;

				focusedWindow?.addBrowserView(view);
				view.setBounds(input.bounds);
				void view.webContents.loadURL(input.url);

				if (SHOW_DEVTOOLS) view.webContents.openDevTools({ mode: "detach" });

				return viewId;
			}),

		updateBrowserView: publicProcedure
			.input(updateBrowserViewSchema)
			.mutation(({ input }) => {
				const [view] = getBrowserView(input.viewId) ?? [];

				view?.setBounds(input.bounds);
			}),

		removeBrowserView: publicProcedure
			.input(z.number())
			.mutation(({ input }) => {
				const [view, win] = getBrowserView(input) ?? [];

				if (view) {
					view.webContents.close();
					view.webContents.closeDevTools();
					win?.removeBrowserView(view);
				}
			}),
	} as const;
}

const zRectSchema = z.object({
	x: z.number(),
	y: z.number(),
	width: z.number(),
	height: z.number(),
});

const boundsSchema = z.custom<Rectangle>((input) => zRectSchema.parse(input));

export const showBrowserViewSchema = z.object({
	url: z.string(),
	bounds: boundsSchema,
	browserViewOptions: z.custom<BrowserViewConstructorOptions>().optional(),
});

export const updateBrowserViewSchema = z.object({
	viewId: z.number(),
	bounds: boundsSchema,
});

export type ShowBrowserViewInput = z.infer<typeof showBrowserViewSchema>;

function getBrowserView(
	viewId: number,
): [view: BrowserView, window: BrowserWindow] | undefined {
	for (const win of BrowserWindow.getAllWindows()) {
		for (const view of win.getBrowserViews()) {
			if (view.webContents.id === viewId) {
				return [view, win];
			}
		}
	}

	return undefined;
}
