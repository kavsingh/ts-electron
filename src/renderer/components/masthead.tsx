import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

import type { Component } from "solid-js";

const Masthead: Component = () => (
	<Container>
		<Nav>
			<A href="/">System Info</A>
			<A href="/daemon">NTK Daemon</A>
			<A href="/native-api">Native Api</A>
			<A href="/files">Files</A>
		</Nav>
	</Container>
);

export default Masthead;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: ${(props) => props.theme?.spacing.fixed[0]};
`;
