<<<<<<< HEAD
import './App.css';
import Collections from './components/collections/Collections';
import Items from './components/items/Items';
import { Routes, Route, Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function App() {
=======
import "./App.css";
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Collections from "./components/collections/Collections";
import Items from "./components/items/Items";
// import { CollectionContext } from './CollectionContext';
// import { ItemContext } from './ItemContext';

function App()
{
	const [collectionId, setCollectionId] = useState(null);
	const [itemId, setItemId] = useState(null);

>>>>>>> 45ff60d (Collections CRUD.)
	return (
		<div className='app-container'>
			<header>
				<Link to='/collections'>
					<Image src='http://tinyimg.io/i/fAUZtrg.png' alt='Logo' />
				</Link>
			</header>
			{/* <CollectionContext.Provider
				value={{ collectionId, setCollectionId }}>
				<ItemContext.Provider
					value={{ itemId, setItemId }}> */}
			<Routes>
				<Route path='/collections' element={<Collections />} />
				<Route path='/collections/:id' element={<Items />} />
				{/* <Route path='/items/:id' element={<ItemsDetail />} /> */}
			</Routes>
			{/* </ItemContext.Provider>
			</CollectionContext.Provider > */}
		</div >
	);
}

export default App;
