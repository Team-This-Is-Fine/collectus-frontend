import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CollectionsForm from "../collectionsForm/CollectionsForm";
import CollectionsView from "../collectionsView/CollectionsView";

// Items in a collection.
export default function Items() {
  const { id } = useParams();
  const [collectionItems, setCollectionItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Handles axios call on mount.
  useEffect(() => {
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      setCollections([...res.data]);
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
        <CollectionsForm
          setShowModal={setShowModal}
          showModal={showModal}
          items={items}
          setItems={setItems}
        />
      ) : (
        <>
          <CollectionsView items={items} />
          <button onClick={handleOpen}>Add Collection</button>
        </>
      )}
    </div>
  );
}
