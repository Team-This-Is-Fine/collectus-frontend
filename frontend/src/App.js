import './App.css';
import CollectionList from './components/collectionList/CollectionList';
import Home from './components/home/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App()
{
	return (
		<>
			<header>
				<h1>Collectus</h1>
				<nav>
					<Link to="/">Home</Link>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
