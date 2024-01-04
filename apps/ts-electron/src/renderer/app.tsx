import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { TRPCClientProvider } from "./contexts/trpc-client";
import useTheme from "./hooks/use-theme";
import AppLayout from "./layouts/app";
import Files from "./pages/files";
import Preferences from "./pages/preferences";
import SystemInfo from "./pages/system-info";
import { getTRPCClient } from "./trpc/client";

export default function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return (
		<TRPCClientProvider client={getTRPCClient()}>
			<QueryClientProvider client={new QueryClient()}>
				<HashRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route path="/" element={<SystemInfo />} />
							<Route path="/files" element={<Files />} />
							<Route path="/preferences" element={<Preferences />} />
						</Route>
					</Routes>
				</HashRouter>
			</QueryClientProvider>
		</TRPCClientProvider>
	);
}
