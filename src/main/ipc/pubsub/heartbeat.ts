import { mainPublish } from "~/bridge/pubsub";

import type { BrowserWindow } from "electron";

export const attachHeartbeat = (win: BrowserWindow) => {
	let stopHeartbeat: ReturnType<typeof startHeartbeat> | undefined;

	const start = () => {
		stopHeartbeat?.();
		stopHeartbeat = startHeartbeat(win);
	};

	const stop = () => {
		stopHeartbeat?.();
	};

	win.on("show", start);
	win.on("restore", start);
	win.on("hide", stop);
	win.on("close", stop);

	return () => {
		stopHeartbeat?.();
		win.off("show", start);
		win.off("restore", start);
		win.off("hide", stop);
		win.off("close", stop);
	};
};

const startHeartbeat = (win: BrowserWindow) => {
	let timeout: NodeJS.Timeout | null = null;

	const tick = () => {
		if (timeout) clearTimeout(timeout);

		if (!win.isVisible()) return;

		mainPublish(win, "health", {
			status: "ok",
			timestamp: BigInt(Date.now()),
		});

		timeout = setTimeout(tick, 2000);
	};

	tick();

	return () => {
		if (timeout) clearTimeout(timeout);
	};
};
