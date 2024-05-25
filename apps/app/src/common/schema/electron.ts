// Generated by ts-to-zod
import { z } from "zod";

export const electronFileFilterSchema = z.object({
	extensions: z.array(z.string()),
	name: z.string(),
});

export const electronOpenDialogOptionsSchema = z.object({
	title: z.string().optional(),
	defaultPath: z.string().optional(),
	buttonLabel: z.string().optional(),
	filters: z.array(electronFileFilterSchema).optional(),
	properties: z
		.array(
			z.union([
				z.literal("openFile"),
				z.literal("openDirectory"),
				z.literal("multiSelections"),
				z.literal("showHiddenFiles"),
				z.literal("createDirectory"),
				z.literal("promptToCreate"),
				z.literal("noResolveAliases"),
				z.literal("treatPackageAsDirectory"),
				z.literal("dontAddToRecent"),
			]),
		)
		.optional(),
	message: z.string().optional(),
	securityScopedBookmarks: z.boolean().optional(),
});