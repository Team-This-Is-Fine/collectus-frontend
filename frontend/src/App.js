import "./App.css";
import Collections from "./components/collections/Collections";
import Items from "./components/items/Items";
import { Routes, Route, Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ItemDetails from "./components/itemDetails/ItemDetails";

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/collections">
          <Image src="http://tinyimg.io/i/fAUZtrg.png" alt="Logo" />
        </Link>
      </header>
      <Routes>
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<Items />} />
        {/* <Route path='/items/:id' element={<ItemsDetail />} /> */}
        <Route path="/items/detail/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
