import { useState } from "react";

import { useAppQueryClients } from "#renderer/contexts/app-query-clients";

export default function useFileSelectDialog() {
	const { trpc } = useAppQueryClients();
	const [files, setFiles] = useState<string[]>([]);
	const { mutate } = trpc.showOpenDialog.useMutation({
		onSuccess(result) {
			setFiles(result.filePaths);
		},
	});

	return [files, mutate] as const;
}
