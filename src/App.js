import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
	return (
	<Router basename="/webgl-test">
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</Router>
	);
}

export default App;
