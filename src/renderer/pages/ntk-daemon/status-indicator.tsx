import { DaemonStatusEvent_Type } from "@nativeinstruments/ntk-daemon-node-lib";
import { createQuery } from "@tanstack/solid-query";
import { createSignal, onCleanup, Show } from "solid-js";

import Pulse from "~/renderer/components/pulse";
import StatusBadge from "~/renderer/components/status-badge";
import { fetchDaemonVersion } from "~/renderer/services/ntk-daemon";
import { NtkDaemonQueryKey } from "~/renderer/services/ntk-daemon/constants";
import { getTRPCClient } from "~/renderer/trpc/client";

import type { Component } from "solid-js";

const StatusIndicator: Component = () => {
	const { refetch } = createQuery({
		queryKey: () => [NtkDaemonQueryKey.DaemonVersion],
		queryFn: fetchDaemonVersion,
	});
	const [status, setStatus] = createSignal<DaemonStatusEvent_Type>();
	const [timestamp, setTimestamp] = createSignal(Date.now());
	const subscription = getTRPCClient().ntkDaemonStatusChannel.subscribe(
		undefined,
		{
			onData: (data) => {
				if (data.type === "error") return;

				const type = data.message.daemonStatusEvent?.type;

				setStatus(type);
				setTimestamp(Date.now());

				if (type === DaemonStatusEvent_Type.startup_ended) void refetch();
			},
		},
	);

	onCleanup(() => subscription.unsubscribe());

	return (
		<Pulse trigger={timestamp}>
			<Show when={status()} keyed>
				{(resolved) => <StatusBadge>{formatStatusType(resolved)}</StatusBadge>}
			</Show>
		</Pulse>
	);
};

export default StatusIndicator;

const formatStatusType = (type: DaemonStatusEvent_Type) => {
	switch (type) {
		case DaemonStatusEvent_Type.startup_started:
			return "Daemon Starting";
		case DaemonStatusEvent_Type.startup_ended:
			return "Daemon Started";
		case DaemonStatusEvent_Type.heartbeat:
			return "Daemon Heartbeat";
		default:
			return "";
	}
};
