import dotenv from "dotenv";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

import type { UserConfig } from "vite";

dotenv.config();

const define = {
	E2E: JSON.stringify(process.env["E2E"] === "true"),
	NATIVE_API_BASE_URL: JSON.stringify(process.env["NATIVE_API_BASE_URL"]),
	NATIVE_API_USER_AGENT: JSON.stringify(process.env["NATIVE_API_USER_AGENT"]),
	NATIVE_API_APP_TOKEN: JSON.stringify(process.env["NATIVE_API_APP_TOKEN"]),
};

export const nodeConfig: UserConfig = {
	define,
	resolve: { conditions: ["node"] },
	plugins: [tsconfigPathsPlugin(), externalizeDepsPlugin()],
};

export const rendererConfig: UserConfig = {
	define,
	resolve: { conditions: ["browser"] },
	plugins: [tsconfigPathsPlugin(), solidPlugin()],
};

export default defineConfig({
	main: nodeConfig,
	preload: nodeConfig,
	renderer: rendererConfig,
});
