import { createQuery } from "@tanstack/solid-query";

import { fetchKnownProducts } from "~/renderer/services/ntk-daemon";
import { NtkDaemonQueryKey } from "~/renderer/services/ntk-daemon/constants";

import type { Component } from "solid-js";

const Product: Component<{ upid: string }> = (props) => {
	const { data: product } = createQuery({
		staleTime: Infinity,
		refetchOnMount: false,
		queryKey: () => [NtkDaemonQueryKey.KnownProducts],
		queryFn: fetchKnownProducts,
		select: (data) => data.find((item) => item.upid === props.upid),
	});

	return (
		<div>
			<div>{product?.title}</div>
			<div>{product?.installed ? "Installed" : "Not Installed"}</div>
		</div>
	);
};

export default Product;
