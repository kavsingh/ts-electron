import { measuredAsyncFn } from "~/common/measure";
import { getTRPCClient } from "~/renderer/trpc/client";

export const fetchDaemonVersion = measuredAsyncFn("fetchDaemonVersion", () =>
	getTRPCClient().ntkDaemonVersion.query(),
);

export const fetchKnownProducts = measuredAsyncFn(
	"fetchKnownProducts",
	async () => {
		const response = await getTRPCClient().ntkDaemonKnownProducts.query();

		return response.knownProducts;
	},
);
