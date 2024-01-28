import "./App.css";
import { Page } from "./features/page";
import { Navigation } from "./features/navigation";
import { Container } from "./styled";

function App({ toggleTheme }) {
	return (
		<Container>
			<Navigation toggleTheme={toggleTheme} />
			<Page />
		</Container>
	);
}

export default App;
