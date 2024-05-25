import { render, waitFor, screen } from "@solidjs/testing-library";
import { describe, beforeEach, it, expect, vi } from "vitest";

import { setupRenderWrapper } from "#renderer/__test-helpers__/render-wrapper";

import SystemInfoCard from "./system-info-card";

describe("<SystemInfoCard />", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should render system info", async () => {
		expect.assertions(3);

		const { Wrapper } = setupRenderWrapper();

		render(() => <SystemInfoCard />, { wrapper: Wrapper });

		expect(screen.getByText("loading...")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText(/^total memory/)).toBeInTheDocument();
		});

		expect(screen.queryByText("loading...")).not.toBeInTheDocument();
	});
});