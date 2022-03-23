import './App.css';
import Home from './components/home/Home';
import Item from './components/item/Item';
import { Routes, Route, Link } from 'react-router-dom';

function App()
{
	return (
		<>
			<header>
				<h1>Collectus</h1>
				<nav>
					<Link to='/home'>Home</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/items' elements={<Item />} />
			</Routes>
		</>
	);
}

export default App;
