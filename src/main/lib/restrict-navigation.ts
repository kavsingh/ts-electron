import { shell } from "electron";

import { warn } from "~/common/log";

import type { WebContents } from "electron";

const restrictNavigation = (contents: WebContents) => {
	// https://www.electronjs.org/docs/latest/tutorial/security#13-disable-or-limit-navigation
	contents.on("will-navigate", (event, url) => {
		warn(`Blocked navigation attempt to ${url}`);
		event.preventDefault();
	});

	// https://www.electronjs.org/docs/latest/tutorial/security#14-disable-or-limit-creation-of-new-windows
	contents.setWindowOpenHandler(({ url }) => {
		if (isAllowedHost(url)) {
			setImmediate(() => void shell.openExternal(url));
		} else {
			warn(`Blocked attempt to open ${url}`);
		}

		return { action: "deny" };
	});
};

export default restrictNavigation;

const allowedHosts: string[] = [];

const isAllowedHost = (url: string) => allowedHosts.includes(new URL(url).host);