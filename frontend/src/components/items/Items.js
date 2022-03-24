import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CollectionsForm from "../collectionsForm/CollectionsForm";
import ItemsForm from "../itemsForm/ItemsForm";
import ItemsView from "../itemsView/ItemsView";
import CollectionsView from "../collectionsView/CollectionsView";

// Items in a collection.
export default function Items() {
  const { id } = useParams();
  // const [collectionItems, setCollectionItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Handles axios call on mount.
  useEffect(() => {
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      console.log(res.data.items);
      setItems([...res.data.item]);
    });
  }, []);

  // Handles no collections.
  if (!items.length) {
    return "Loading";
  }

  function handleOpen() {
    setShowModal(true);
  }

  return (
    <div className="home-container">
      {showModal ? (
        <ItemsForm
          setShowModal={setShowModal}
          showModal={showModal}
          items={items}
          setItems={setItems}
        />
      ) : (
        <>
          <ItemsView items={items} id={id} />
          <button onClick={handleOpen}>Add Item</button>
        </>
      )}
    </div>
  );
}
