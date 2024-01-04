import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { THEME_SOURCES, themeSourceSchema } from "#common/lib/theme";
import { useTRPCClient } from "#renderer/contexts/trpc-client";

import type { ThemeSource } from "#common/lib/theme";
import type { ChangeEventHandler, FormEventHandler } from "react";

export default function ThemeSwitch() {
	const client = useTRPCClient();
	const { data: themeSource, refetch } = useQuery({
		queryKey: ["ThemeSource"],
		queryFn: () => client.themeSource.query(),
	});
	const { mutate: saveThemeSource } = useMutation({
		mutationFn: (source: ThemeSource) => client.setThemeSource.mutate(source),
		onSuccess: () => void refetch(),
	});

	const handleSubmit = useCallback<FormEventHandler>((event) => {
		event.preventDefault();
	}, []);

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(event) => {
			saveThemeSource(themeSourceSchema.parse(event.currentTarget.value));
		},
		[saveThemeSource],
	);

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend className="mb-2 font-semibold">Theme</legend>
				<ul className="flex gap-3">
					{THEME_SOURCES.map((option) => (
						<li className="flex items-center gap-1" key={option}>
							<input
								type="radio"
								id={option}
								name={option}
								value={option}
								checked={themeSource === option}
								onChange={handleChange}
								className="peer size-4 cursor-pointer"
							/>
							<label
								className="cursor-pointer text-neutral-500 transition-colors peer-checked:text-black dark:peer-checked:text-white"
								htmlFor={option}
							>
								<LabelText themeSource={option} />
							</label>
						</li>
					))}
				</ul>
			</fieldset>
		</form>
	);
}

function LabelText(props: { themeSource: ThemeSource }) {
	switch (props.themeSource) {
		case "system":
			return <>System</>;

		case "light":
			return <>Light</>;

		case "dark":
			return <>Dark</>;

		default:
			return <>{props.themeSource}</>;
	}
}
