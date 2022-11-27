import type { NtkDaemonBridgeResponse } from "../ntk-daemon/types";
import type {
	DaemonStatusEvent,
	DaemonVersionResponse,
	KnownProductsResponse,
} from "@nativeinstruments/ntk-daemon-node-lib";

// Note: return types will be wrapped in a promise
export interface Requests {
	getSystemInfo: () => SystemInfo;
	getNtkDaemonVersion: () => NtkDaemonBridgeResponse<DaemonVersionResponse>;
	getNtkDaemonKnownProducts: () => NtkDaemonBridgeResponse<KnownProductsResponse>;
}

export type RequestChannelName = keyof Requests;

export interface Messages {
	systemInfo: SystemInfo;
	ntkDaemonStatus: DaemonStatusEvent;
}

export type MessageChannelName = keyof Messages;

export interface SystemInfo {
	os: string;
	totalMemory: bigint;
	freeMemory: bigint;
}
