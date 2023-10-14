import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "#renderer/components/button";
import useFileDrop from "#renderer/hooks/use-file-drop";
import useFileSelectDialog from "#renderer/hooks/use-file-select-dialog";
import Page from "#renderer/layouts/page";

export default function Files() {
	const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

	const handleFileSelect = useCallback((selected: string[]) => {
		setSelectedFiles((current) => current.concat(selected));
	}, []);

	return (
		<>
			<Page.Header>Files</Page.Header>
			<Page.Content>
				<DialogFileSelect onSelect={handleFileSelect} />
				<DragFileSelect onSelect={handleFileSelect} />
				<ul className="flex flex-col gap-1">
					{selectedFiles.map((file) => (
						<li
							key={file}
							className="flex gap-2 border-b border-b-neutral-200 pb-2 text-neutral-700 last:border-b-0 last:pb-0 dark:border-b-neutral-700 dark:text-neutral-400"
						>
							{file}
						</li>
					))}
				</ul>
			</Page.Content>
		</>
	);
}

function DialogFileSelect({
	onSelect,
}: {
	onSelect: (selected: string[]) => void;
}) {
	const [files, selectFiles] = useFileSelectDialog();

	const handleClick = useCallback(() => {
		selectFiles();
	}, [selectFiles]);

	useEffect(() => {
		onSelect(files);
	}, [files, onSelect]);

	return <Button onClick={handleClick}>Select files</Button>;
}

function DragFileSelect({
	onSelect,
}: {
	onSelect: (selected: string[]) => void;
}) {
	const [{ files, isActive }, dragDropHandlers] = useFileDrop();

	useEffect(() => {
		const filePaths = files?.map(({ file, isDirectory }) => {
			return `${file.path} (${isDirectory ? "directory" : "file"})`;
		});

		onSelect(filePaths ?? []);
	}, [files, onSelect]);

	return (
		<div
			className={twMerge(
				"my-3 grid h-[200px] place-items-center rounded-lg border border-neutral-300 text-neutral-600 transition-colors dark:border-neutral-700 dark:text-neutral-400",
				isActive &&
					"border-black bg-black/10 text-black dark:border-white dark:bg-white/10 dark:text-white",
			)}
			{...dragDropHandlers}
		>
			Drop files
		</div>
	);
}
