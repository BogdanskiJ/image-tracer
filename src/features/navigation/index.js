import React, { useState } from "react";
import { StyledHeader } from "./styled";

export const Navigation = ({ toggleTheme }) => {
	return (
		<StyledHeader>
			<div>LInk1</div>
			<div>Link2</div>
			<div>LInk3</div>
			<button onClick={toggleTheme}>Theme</button>
		</StyledHeader>
	);
};
