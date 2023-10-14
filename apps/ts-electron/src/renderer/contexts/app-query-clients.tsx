import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { ipcLink } from "electron-trpc/renderer";
import { createContext, useContext, useMemo } from "react";
import { SuperJSON } from "superjson";

import type { AppTRPC } from "#renderer/trpc";
import type { PropsWithChildren } from "react";

export function AppQueryClientsProvider({
	trpc,
	queryClient,
	children,
}: PropsWithChildren<AppQueryClientsContextValue>) {
	const trpcClient = useMemo(() => {
		return trpc.createClient({ links: [ipcLink()], transformer: SuperJSON });
	}, [trpc]);

	return (
		<AppQueryClientsContext.Provider value={{ trpc, queryClient }}>
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</trpc.Provider>
		</AppQueryClientsContext.Provider>
	);
}

export function useAppQueryClients() {
	const value = useContext(AppQueryClientsContext);

	if (!value) {
		throw new Error(
			"useAppQueryClients must be used within AppQueryClientsProvider",
		);
	}

	return value;
}

const AppQueryClientsContext = createContext<
	AppQueryClientsContextValue | undefined
>(undefined);

type AppQueryClientsContextValue = {
	trpc: AppTRPC;
	queryClient: QueryClient;
};
