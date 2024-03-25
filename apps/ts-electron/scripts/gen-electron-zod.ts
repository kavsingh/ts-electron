import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { generate } from "ts-to-zod";

import { formatTypescriptContent } from "./format";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

function getElectronTypesPath() {
	return path.resolve(__dirname, "../node_modules/electron/electron.d.ts");
}

function nameFilter(name: string) {
	return /opendialogoptions/i.test(name) || /filefilter/i.test(name);
}

export default async function genElectronZod(outFile: string) {
	const typesPath = await getElectronTypesPath();
	const result = generate({
		nameFilter,
		sourceText: (await readFile(typesPath)).toString(),
	});
	const rawSchema = result.getZodSchemasFile(typesPath);
	const output = await formatTypescriptContent(`
		${rawSchema.replace(/^const electron/gm, "export const electron")}
	`);

	return writeFile(outFile, output, "utf-8");
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
	void genElectronZod(
		path.resolve(__dirname, "../src/common/schema/electron.ts"),
	);
}
