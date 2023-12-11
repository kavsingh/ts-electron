import { test, expect } from "@playwright/test";

import { setupApplication, teardownApplication } from "./lib/application";

import type { ElectronApplication } from "@playwright/test";

// TODO: Re-enable when https://github.com/microsoft/playwright/pull/28499 released
test.describe.skip("e2e tests", () => {
	let app: ElectronApplication;

	test.beforeAll(async () => {
		app = await setupApplication();
	});

	test.afterAll(async () => {
		await teardownApplication(app);
	});

	test("should open at home page", async () => {
		const page = await app.firstWindow();

		await expect(
			page.getByRole("heading", { name: "System Info" }),
		).toBeVisible();
	});
});
