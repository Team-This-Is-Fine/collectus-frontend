import "./App.css";
import Collections from "./components/collections/Collections";
import CollectionsForm from "./components/collectionsForm/CollectionsForm";
import Items from "./components/items/Items";
import ItemsForm from "./components/itemsForm/ItemsForm";
import { Routes, Route, Link } from "react-router-dom";

import { Image } from "react-bootstrap";
import ItemDetails from "./components/itemDetails/ItemDetails";



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
        <Route path="/items/detail/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
