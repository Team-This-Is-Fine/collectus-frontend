import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CollectionsForm from "../collectionsForm/CollectionsForm";
import ItemsForm from "../itemsForm/ItemsForm";
import ItemsView from "../itemsView/ItemsView";
import CollectionsView from "../collectionsView/CollectionsView";
import "./Items.css";

// Items in a collection.
export default function Items() {
  const { id } = useParams();
  const [currentCollection, setCurrentCollection] = useState(id);
  // const [collectionItems, setCollectionItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

	// Handles axios call on mount.
	useEffect(() => {
		axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
			console.log(res.data.item);
			setItems([...res.data.item]);
		});
	}, [id]);

  // Handles no collections.
  if (!items.length) {
    {<button onClick={handleOpen}>Add Item</button>}
  } 

	function handleOpen() {
		setShowModal(true);
	}

  return (
    <div className="home-container">
      <button onClick={handleOpen}>Add Item</button>
      {showModal ? (
        <>
        <ItemsForm
          setShowModal={setShowModal}
          showModal={showModal}
          items={items}
          setItems={setItems}
          id ={id}
        />
        <button onClick={handleOpen}>Add Item</button>
        </>
      ) : (
        <>
          <ItemsView items={items} id={id} currentCollection={currentCollection} />
          <button onClick={handleOpen}>Add Item</button>
        </>
      )}
    </div>
  );
}
