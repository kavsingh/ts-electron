import { Link, Outlet } from "react-router-dom";

export default function App() {
	return (
		<>
			<div className="grid h-full grid-cols-[min-content_1fr]">
				<div className="min-h-full p-4 pt-9">
					<nav className="flex flex-col gap-2">
						<Link to="/">System Info</Link>
						<Link to="/files">Files</Link>
						<Link to="/preferences">Preferences</Link>
					</nav>
				</div>
				<div className="h-full overflow-y-auto overflow-x-hidden">
					<div className="min-h-full bg-white dark:bg-neutral-900">
						<Outlet />
					</div>
				</div>
			</div>
			<div className="fixed inset-x-0 top-0 z-10 h-8 [-webkit-app-region:drag]" />
		</>
	);
}
