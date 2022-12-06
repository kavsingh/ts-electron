import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { For } from "solid-js";

import { fetchKnownProducts } from "~/renderer/services/ntk-daemon";
import { NtkDaemonQueryKey } from "~/renderer/services/ntk-daemon/constants";

import Product from "./product";

import type { Component } from "solid-js";

const Products: Component = () => {
	const queryClient = useQueryClient();
	const { data: upids } = createQuery({
		staleTime: Infinity,
		refetchOnMount: false,
		queryKey: () => [NtkDaemonQueryKey.KnownProducts],
		queryFn: fetchKnownProducts,
		select: (data) => data.map(({ upid }) => upid),
	});

	const handleRefreshClick = () => {
		void queryClient.invalidateQueries({
			queryKey: [NtkDaemonQueryKey.KnownProducts],
		});
	};

	return (
		<div>
			<button onClick={handleRefreshClick}>Refresh</button>
			<For each={upids}>{(upid) => <Product upid={upid} />}</For>
		</div>
	);
};

export default Products;
