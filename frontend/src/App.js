import './App.css';
import Collections from './components/collections/Collections';
import Items from './components/itemsView/ItemsView';
import { Routes, Route, Link } from 'react-router-dom';

function App()
{
	return (
		<div className="app-container">
			<header>
				<h1>Collectus</h1>
				<nav>
					<Link to='/collections'>Home</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/collections' element={<Collections />} />
				<Route path='/collections/:id' elements={<Items />} />
				<Route path='/collections/items/:itemId' elements={<Items />} />
			</Routes>
		</div>
	);
}

export default App;