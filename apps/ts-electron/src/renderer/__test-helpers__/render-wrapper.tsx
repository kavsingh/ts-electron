import { QueryClient } from "@tanstack/react-query";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { AppQueryClientsProvider } from "#renderer/contexts/app-query-clients";
import { getTRPC } from "#renderer/trpc";

import type { PropsWithChildren } from "react";

export function setupRenderWrapper() {
	const trpc = getTRPC();
	const queryClient = new QueryClient();
	const user = userEvent.setup();

	function Wrapper(props: PropsWithChildren) {
		return (
			<AppQueryClientsProvider trpc={trpc} queryClient={queryClient}>
				<MemoryRouter>{props.children}</MemoryRouter>
			</AppQueryClientsProvider>
		);
	}

	return { user, trpc, queryClient, Wrapper } as const;
}
