import './App.css';
import Home from './components/home/Home';
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
			</Routes>
		</>
	);
}

export default App;
