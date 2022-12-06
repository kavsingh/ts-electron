import { app, BrowserWindow, session } from "electron";
import { createIPCHandler } from "electron-trpc/main";

import restrictNavigation from "./lib/restrict-navigation";
import { appRouter, startHeartbeat } from "./trpc/router";
import { createMainWindow } from "./windows";

let trpcIpcHandler: ReturnType<typeof createIPCHandler> | undefined = undefined;
let stopHeartbeat: ReturnType<typeof startHeartbeat> | undefined = undefined;

const showMainWindow = () => {
	const mainWindow = createMainWindow();

	mainWindow.on("ready-to-show", () => {
		trpcIpcHandler?.attachWindow(mainWindow);
		mainWindow.show();
	});

	mainWindow.on("closed", () => {
		trpcIpcHandler?.detachWindow(mainWindow);
	});
};

app.on("activate", () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) showMainWindow();
});

app.on("web-contents-created", (_, contents) => {
	restrictNavigation(contents);
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
	stopHeartbeat?.();
});

app.enableSandbox();
void app.whenReady().then(() => {
	trpcIpcHandler = createIPCHandler({ router: appRouter });
	stopHeartbeat = startHeartbeat();

	session.defaultSession.webRequest.onBeforeSendHeaders(
		{ urls: [`${NATIVE_API_BASE_URL}/*`] },
		(details, callback) => {
			details.requestHeaders["User-Agent"] = NATIVE_API_USER_AGENT;
			callback({ requestHeaders: details.requestHeaders });
		},
	);

	session.defaultSession.webRequest.onHeadersReceived(
		{ urls: [`${NATIVE_API_BASE_URL}/*`] },
		(details, callback) => {
			details.responseHeaders = Object.assign(details.responseHeaders ?? {}, {
				"Access-Control-Allow-Origin": ["*"],
				"Access-Control-Allow-Headers": ["*"],
				"Access-Control-Allow-Methods": ["*"],
				"Access-Control-Allow-Credentials": ["true"],
			});
			callback({ responseHeaders: details.responseHeaders });
		},
	);

	showMainWindow();
});
