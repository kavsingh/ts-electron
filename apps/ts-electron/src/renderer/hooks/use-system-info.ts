import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useTRPCClient } from "#renderer/contexts/trpc-client";

export default function useSystemInfo() {
	const client = useTRPCClient();
	const queryClient = useQueryClient();
	const query = useQuery({
		queryKey: ["systemInfo"],
		queryFn: () => client.systemInfo.query(),
	});

	useEffect(() => {
		const subscription = client.systemInfoEvent.subscribe(undefined, {
			onData(data) {
				queryClient.setQueryData(["systemInfo"], () => data);
			},
		});

		return function cleanup() {
			subscription.unsubscribe();
		};
	}, [client.systemInfoEvent, queryClient]);

	return query;
}
