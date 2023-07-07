const requireJSON5 = require("require-json5");
const tsconfig = requireJSON5("./tsconfig.json");

const { restrictFrom } = require("./lib");

const nodeOnlyImports = {
	paths: [
		"electron",
		"systeminformation",
		"@trpc/server",
		"eventemitter3",
		...require("module").builtinModules,
	],
	patterns: [],
};

const browserOnlyImports = {
	paths: ["@trpc/client"],
	patterns: ["solid-*", "@solidjs/*", "tailwind-*"],
};

const tsconfigPathPatterns = Object.keys(tsconfig.compilerOptions.paths);

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: ["plugin:import/recommended", "plugin:import/typescript"],
	rules: {
		// everything outside renderer should not be loading browser packages
		"no-restricted-imports": ["error", browserOnlyImports],
		"import/no-cycle": "error",
		"import/no-self-import": "error",
		"import/no-unused-modules": "error",
		"import/no-useless-path-segments": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				// needed for all cases since electron must be installed as a dev dependency
				// TODO: is there a way around this so we can set this to false in src/?
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
		"import/order": [
			"warn",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					["parent", "sibling", "index"],
					"type",
				],
				"pathGroups": [
					...tsconfigPathPatterns.map((pattern) => ({
						pattern,
						group: "internal",
					})),
				],
				"pathGroupsExcludedImportTypes": ["type"],
				"alphabetize": { order: "asc" },
				"newlines-between": "always",
			},
		],
		// enforce context isolation
		"import/no-restricted-paths": [
			"error",
			{
				zones: [
					// [target] cannot import [from]
					{ target: "./src/main", from: "./src/renderer" },
					{ target: "./src/main", from: "./src/preload" },
					{ target: "./src/renderer", from: "./src/main" },
					{ target: "./src/renderer", from: "./src/preload" },
					{ target: "./src/common", from: "./src/main" },
					{ target: "./src/common", from: "./src/renderer" },
					{ target: "./src/common", from: "./src/preload" },
					{ target: "./src/preload", from: "./src/main" },
					{ target: "./src/preload", from: "./src/renderer" },
				],
			},
		],
	},
	overrides: [
		{
			files: ["*.ts?(x)"],
			settings: {
				"import/parsers": {
					"@typescript-eslint/parser": [".ts", ".tsx"],
				},
				"import/resolver": {
					"eslint-import-resolver-typescript": {
						project: "./tsconfig.json",
					},
				},
			},
		},

		...restrictFrom("", browserOnlyImports),

		...restrictFrom("src/common", {
			paths: [...nodeOnlyImports.paths, ...browserOnlyImports.paths],
			patterns: [...nodeOnlyImports.patterns, ...browserOnlyImports.patterns],
		}),

		...restrictFrom("src/main", browserOnlyImports),

		...restrictFrom("src/renderer", nodeOnlyImports),

		...restrictFrom("src/preload.ts", {
			paths: [...nodeOnlyImports.paths, ...browserOnlyImports.paths].filter(
				(path) => !/^electron/.test(path)
			),
			patterns: [...nodeOnlyImports.patterns, ...browserOnlyImports.patterns],
		}),
	],
};
