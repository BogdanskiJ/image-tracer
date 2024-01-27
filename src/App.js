import logo from "./logo.svg";
import "./App.css";
import { Page } from "./features/page";
import { Navigation } from "./features/navigation";
import { Container } from "./styled";

function App() {
	return (
		<Container>
			<Navigation />
			<Page />
		</Container>
	);
}

export default App;
