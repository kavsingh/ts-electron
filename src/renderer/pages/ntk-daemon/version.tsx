import { createQuery } from "@tanstack/solid-query";

import { fetchDaemonVersion } from "~/renderer/services/ntk-daemon";
import { NtkDaemonQueryKey } from "~/renderer/services/ntk-daemon/constants";

import type { Component } from "solid-js";

const Version: Component = () => {
	const { data: version, error } = createQuery({
		queryKey: () => [NtkDaemonQueryKey.DaemonVersion],
		queryFn: fetchDaemonVersion,
	});

	return (
		<>
			{version ? `Running NTK Daemon ${formatVersion(version)}` : null}
			{error ? `Error getting NTK Daemon version ${String(error)}` : null}
		</>
	);
};

export default Version;

const formatVersion = ({
	major,
	minor,
	micro,
	build,
}: {
	major: bigint;
	minor: bigint;
	micro: bigint;
	build: string;
}) => `${major.toString()}.${minor.toString()}.${micro.toString()} ${build}`;
