import { useCallback, useState } from "react";

import { useTRPCClient } from "#renderer/contexts/trpc-client";

export default function useFileSelectDialog() {
	const client = useTRPCClient();
	const [files, setFiles] = useState<string[]>([]);

	const showDialog = useCallback(
		async (options?: Options) => {
			const selectResult = await client.showOpenDialog.query({
				properties: ["openFile", "multiSelections"],
				...options,
			});

			setFiles(selectResult.filePaths);
		},
		[client.showOpenDialog],
	);

	return [files, showDialog] as const;
}

type Options = Parameters<
	ReturnType<typeof useTRPCClient>["showOpenDialog"]["query"]
>[0];
