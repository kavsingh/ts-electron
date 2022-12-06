import { vi } from "vitest";

import { createMockSystemInfo } from "~/common/__test-helpers__/mock-data-creators/system-info";

import type { AppTRPCClient } from "../client";

const mockClient: AppTRPCClient = {
	// queries
	systemInfo: {
		// @ts-expect-error TODO: resolve type mismatch
		query: vi.fn(() => Promise.resolve(createMockSystemInfo())),
	},
	ntkDaemonVersion: {
		// @ts-expect-error TODO: resolve type mismatch
		query: vi.fn(() =>
			Promise.resolve({
				major: BigInt(0),
				minor: BigInt(0),
				micro: BigInt(0),
				build: "",
			}),
		),
	},
	ntkDaemonKnownProducts: {
		query: vi.fn(() => Promise.resolve({ knownProducts: [] })),
	},
	// subscriptions
	heartbeat: { subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })) },
	ntkDaemonStatusChannel: {
		subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
	},
	ntkDaemonInstallationChannel: {
		subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
	},
};

export const getTRPCClient = () => mockClient;
