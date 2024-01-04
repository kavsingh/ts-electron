import { createContext, useContext } from "react";

import type { AppTRPCClient } from "#renderer/trpc/client";
import type { PropsWithChildren } from "react";

export function TRPCClientProvider(
	props: PropsWithChildren<{ client: AppTRPCClient }>,
) {
	return (
		<TRPCClientContext.Provider value={props.client}>
			{props.children}
		</TRPCClientContext.Provider>
	);
}

export function useTRPCClient() {
	const value = useContext(TRPCClientContext);

	if (!value) {
		throw new Error("useTRPCClient must be used within a TRPCClientProvider");
	}

	return value;
}

const TRPCClientContext = createContext<AppTRPCClient | undefined>(undefined);
