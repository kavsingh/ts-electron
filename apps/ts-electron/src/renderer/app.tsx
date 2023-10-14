import { QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { AppQueryClientsProvider } from "./contexts/app-query-clients";
import useTheme from "./hooks/use-theme";
import AppLayout from "./layouts/app";
import Files from "./pages/files";
import Preferences from "./pages/preferences";
import SystemInfo from "./pages/system-info";
import { getTRPC } from "./trpc";

export default function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return (
		<AppQueryClientsProvider trpc={getTRPC()} queryClient={new QueryClient()}>
			<HashRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<SystemInfo />} />
						<Route path="/files" element={<Files />} />
						<Route path="/preferences" element={<Preferences />} />
					</Route>
				</Routes>
			</HashRouter>
		</AppQueryClientsProvider>
	);
}
