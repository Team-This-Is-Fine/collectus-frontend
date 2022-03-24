<<<<<<< HEAD
import './App.css';
import Collections from './components/collections/Collections';
import Items from './components/items/Items';
import { Routes, Route, Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function App()
{
	return (
		<div className="app-container">
			<header>
				<Link to='/collections'>
					<Image src="http://tinyimg.io/i/fAUZtrg.png" alt="Logo" />
				</Link>
			</header>
			<Routes>
				<Route path='/collections' element={<Collections />} />
				<Route path='/collections/:id' element={<Items />} />
				{/* <Route path='/items/:id' element={<ItemsDetail />} /> */}
			</Routes>
		</div>
	);
=======
import "./App.css";
import Collections from "./components/collections/Collections";
import CollectionsForm from "./components/collectionsForm/CollectionsForm";
import Items from "./components/Items/Items";
import ItemsForm from "./components/ItemsForm/ItemsForm";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Collectus</h1>
        <nav>
          <Link to="/collections">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/collections" element={<Collections />} />
        <Route
          path="/collections/add-collection"
          element={<CollectionsForm />}
        />
        <Route path="/collections/:id" element={<Items />} />
        {/* <Route path='/items/add-item' element={<ItemsForm />} /> */}
        {/* <Route path='/items/:id' element={<ItemsDetail />} /> */}
      </Routes>
    </div>
  );
>>>>>>> 5ca311d456bbcbafe3ccd3f6b3b76a54515f5c64
}

export default App;
