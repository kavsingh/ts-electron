import { createQuery } from "@tanstack/solid-query";
import { Show } from "solid-js";

import { fetchProductCategories } from "~/renderer/services/native-api";
import { NativeApiQueryKey } from "~/renderer/services/native-api/constants";

import type { Component } from "solid-js";

const NativeApi: Component = () => {
	const { data } = createQuery({
		queryKey: () => [NativeApiQueryKey.ProductCategories],
		queryFn: fetchProductCategories,
	});

	return (
		<Show when={data} keyed>
			<div>
				<h2>Native Api</h2>
				<h3>Categories</h3>
				{data?.response_body?.categories?.map((cat) => (
					<div>{cat.name}</div>
				))}
			</div>
		</Show>
	);
};

export default NativeApi;
