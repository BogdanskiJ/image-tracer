import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const AppWraper = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<Normalize />
			<GlobalStyle />
			<App toggleTheme={toggleTheme} />
		</ThemeProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppWraper />
	</React.StrictMode>,
);

reportWebVitals();
