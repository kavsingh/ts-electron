import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("./src/renderer/trpc/client");

// @ts-expect-error TODO: mock this out somehow
globalThis.electronTRPC = {
	sendMessage: () => undefined,
	onMessage: () => undefined,
};
