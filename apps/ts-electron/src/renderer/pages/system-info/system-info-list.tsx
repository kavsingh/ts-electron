import useSystemInfo from "#renderer/hooks/use-system-info";

import type { PropsWithChildren } from "react";

export default function SystemInfoList() {
	const { data: info } = useSystemInfo();

	if (!info) return <>Loading...</>;

	return (
		<ul className="m-0 flex list-none flex-col gap-2 p-0">
			<InfoEntry>
				<InfoEntryLabel>os</InfoEntryLabel>
				<span>
					{info.osName} ({info.osVersion}) {info.osArch}
				</span>
			</InfoEntry>
			<InfoEntry>
				<InfoEntryLabel>total memory</InfoEntryLabel>
				<span>{formatMem(info.memTotal)}</span>
			</InfoEntry>
			<InfoEntry>
				<InfoEntryLabel>available memory</InfoEntryLabel>
				<span>{formatMem(info.memAvailable)}</span>
			</InfoEntry>
		</ul>
	);
}

function InfoEntry({ children }: PropsWithChildren) {
	return (
		<li className="flex gap-2 border-b border-b-neutral-200 pb-2 last:border-b-0 last:pb-0 dark:border-b-neutral-700">
			{children}
		</li>
	);
}

function InfoEntryLabel({ children }: PropsWithChildren) {
	return <span className="font-semibold text-neutral-500">{children}</span>;
}

function formatMem(mem: bigint) {
	return `${(Number(mem) / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
