import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import { nodeConfig } from "./electron.vite.config";

export default mergeConfig(
	nodeConfig,
	defineConfig({
		test: {
			include: [
				"src/{main,common,preload}/**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx,mts,cts}",
			],
			environment: "node",
			setupFiles: ["./vitest.node.setup.ts"],
			clearMocks: true,
		},
	})
);
