import { styled } from "solid-styled-components";

import Products from "./products";
import StatusIndicator from "./status-indicator";
import Version from "./version";

import type { Component } from "solid-js";

const NTKDaemon: Component = () => (
	<div>
		<Header>
			<h2>NTK Daemon</h2>
			<StatusIndicator />
		</Header>
		<Version />
		<Products />
	</div>
);

export default NTKDaemon;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
