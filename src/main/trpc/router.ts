import { EventEmitter } from "events";

import { DaemonSubscriberChannel } from "@nativeinstruments/ntk-daemon-node-lib";
import { initTRPC } from "@trpc/server";
import { observable } from "@trpc/server/observable";

import {
	getNtkDaemonKnownProducts,
	getNtkDaemonVersion,
} from "../services/ntk-daemon";
import { getDaemonClient } from "../services/ntk-daemon/client";
import { getSystemInfo } from "../services/system-info";

import type { SystemInfo } from "../services/system-info";
import type {
	DaemonSubscriberEvent,
	DaemonSubscriberEventHandler,
} from "@nativeinstruments/ntk-daemon-node-lib";

const trpc = initTRPC.create();
const heartbeatEmitter = new EventEmitter();
const ntkDaemonClient = getDaemonClient();

export const appRouter = trpc.router({
	systemInfo: trpc.procedure.query(() => getSystemInfo()),
	ntkDaemonVersion: trpc.procedure.query(() => getNtkDaemonVersion()),
	ntkDaemonKnownProducts: trpc.procedure.query(() =>
		getNtkDaemonKnownProducts(),
	),
	heartbeat: trpc.procedure.subscription(() =>
		observable<SystemInfo>((emit) => {
			const handler = (payload: SystemInfo) => {
				emit.next(payload);
			};

			heartbeatEmitter.on("event", handler);

			return function unsubscribe() {
				heartbeatEmitter.off("event", handler);
			};
		}),
	),
	ntkDaemonStatusChannel: trpc.procedure.subscription(() =>
		observable<DaemonSubscriberEvent>((emit) => {
			const handler: DaemonSubscriberEventHandler = (event) => {
				emit.next(event);
			};

			const unsubscribeDaemon = ntkDaemonClient.subscribe(
				DaemonSubscriberChannel.Status,
				handler,
			);

			return function unsubscribe() {
				unsubscribeDaemon();
			};
		}),
	),
	ntkDaemonInstallationChannel: trpc.procedure.subscription(() =>
		observable<DaemonSubscriberEvent>((emit) => {
			const handler: DaemonSubscriberEventHandler = (event) => {
				emit.next(event);
			};

			const unsubscribeDaemon = ntkDaemonClient.subscribe(
				DaemonSubscriberChannel.Installation,
				handler,
			);

			return function unsubscribe() {
				unsubscribeDaemon();
			};
		}),
	),
});

export const startHeartbeat = () => {
	let active = true;
	let timeout: NodeJS.Timeout | undefined = undefined;

	const tick = () => {
		if (!active) return;

		void getSystemInfo().then((info) => {
			if (!active) return;

			heartbeatEmitter.emit("event", info);
			timeout = setTimeout(tick, 1200);
		});
	};

	tick();

	return function stopHeartbeat() {
		active = false;

		if (timeout) {
			clearTimeout(timeout);
			timeout = undefined;
		}
	};
};

export type AppRouter = typeof appRouter;
