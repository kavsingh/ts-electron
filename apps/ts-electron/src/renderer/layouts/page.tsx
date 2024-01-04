import type { PropsWithChildren } from "react";

export function PageHeader(props: PropsWithChildren) {
	return (
		<div className="sticky top-0 bg-white/60 p-4 pt-8 text-lg font-bold backdrop-blur-md dark:bg-neutral-900/60">
			<h2>{props.children}</h2>
		</div>
	);
}

export function PageContent(props: PropsWithChildren) {
	return <div className="p-4">{props.children}</div>;
}

export default {
	Header: PageHeader,
	Content: PageContent,
};
