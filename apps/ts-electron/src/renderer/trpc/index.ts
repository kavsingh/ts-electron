import { createTRPCReact } from "@trpc/react-query";

// eslint-disable-next-line import/no-restricted-paths
import type { AppRouter } from "#main/trpc/router";

let trpc: AppTRPC | undefined;

export function getTRPC() {
	trpc ??= createTRPCReact<AppRouter>();

	return trpc;
}

export type AppTRPC = ReturnType<typeof createTRPCReact<AppRouter>>;
