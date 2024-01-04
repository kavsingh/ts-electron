import { useCallback, useState } from "react";

import type { DragEventHandler } from "react";

export default function useFileDrop() {
	const [droppedFiles, setDroppedFiles] = useState<DroppedFile[]>();
	const [isActive, setIsActive] = useState(false);

	const onDragOver = useCallback<DragEventHandler>((event) => {
		event.preventDefault();
	}, []);

	const onDragEnter = useCallback<DragEventHandler>((event) => {
		event.preventDefault();
		setIsActive(true);
	}, []);

	const onDragLeave = useCallback<DragEventHandler>(() => {
		setIsActive(false);
	}, []);

	const onDrop = useCallback<DragEventHandler>((event) => {
		event.preventDefault();

		const { items, files } = event.dataTransfer;
		const entries = Array.from(items).map((item) => item.webkitGetAsEntry());
		const dropped = Array.from(files).map((file) => {
			const { isDirectory, isFile } =
				entries.find((e) => e?.name === file.name) ?? {};

			return { file, isDirectory, isFile };
		});

		setIsActive(false);
		setDroppedFiles(dropped);
	}, []);

	return [
		{ isActive, files: droppedFiles },
		{ onDragOver, onDragEnter, onDragLeave, onDrop },
	] as const;
}

export type DroppedFile = {
	isDirectory: FileSystemEntry["isDirectory"] | undefined;
	isFile: FileSystemEntry["isFile"] | undefined;
	file: File;
};
