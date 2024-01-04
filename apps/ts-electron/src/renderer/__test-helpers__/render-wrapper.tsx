import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { TRPCClientProvider } from "#renderer/contexts/trpc-client";
import { getTRPCClient } from "#renderer/trpc/client";

import type { PropsWithChildren } from "react";

export function setupRenderWrapper() {
	const trpcClient = getTRPCClient();
	const queryClient = new QueryClient();
	const user = userEvent.setup();

	function Wrapper(props: PropsWithChildren) {
		return (
			<TRPCClientProvider client={trpcClient}>
				<QueryClientProvider client={queryClient}>
					<MemoryRouter>{props.children}</MemoryRouter>
				</QueryClientProvider>
			</TRPCClientProvider>
		);
	}

	return { user, trpcClient, queryClient, Wrapper } as const;
}
