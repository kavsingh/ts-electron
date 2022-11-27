import { app, BrowserWindow } from "electron";

import { attachSystemInfo, attachHeartbeat } from "./ipc/pubsub";
import { setupResponders } from "./ipc/responders";
import restrictNavigation from "./lib/restrict-navigation";
import { createMainWindow } from "./windows";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) app.quit();

const removeResponders = setupResponders();
let mainWindow: BrowserWindow;
let detachHeartbeat: ReturnType<typeof attachHeartbeat> | undefined;
let detachSystemInfo: ReturnType<typeof attachSystemInfo> | undefined;

const showMainWindow = () => {
	detachHeartbeat?.();
	mainWindow = createMainWindow();
	detachHeartbeat = attachHeartbeat(mainWindow);
	detachSystemInfo = attachSystemInfo(mainWindow);
	mainWindow.on("ready-to-show", () => {
		mainWindow.show();
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
	detachHeartbeat?.();
	detachSystemInfo?.();
	removeResponders();
});

app.enableSandbox();
void app.whenReady().then(() => {
	showMainWindow();
});
