import { getQueryKey } from "@trpc/react-query";

import { useAppQueryClients } from "#renderer/contexts/app-query-clients";

export default function useSystemInfo() {
	const { trpc, queryClient } = useAppQueryClients();
	const query = trpc.systemInfo.useQuery();

	trpc.systemInfoEvent.useSubscription(undefined, {
		onData(data) {
			queryClient.setQueryData(
				getQueryKey(trpc.systemInfo, undefined, "query"),
				() => data,
			);
		},
	});

	return query;
}
