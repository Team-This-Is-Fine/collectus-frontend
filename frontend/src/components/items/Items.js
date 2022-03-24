import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
<<<<<<< HEAD
import ItemsForm from "../ItemsForm/ItemsForm";
import ItemsView from "../ItemsView/ItemsView";
import { Button } from "react-bootstrap";
=======
import CollectionsForm from "../collectionsForm/CollectionsForm";
import ItemsForm from "../itemsForm/ItemsForm";
import ItemsView from "../itemsView/ItemsView";
import CollectionsView from "../collectionsView/CollectionsView";
>>>>>>> 91980cbec19a5586822b947a9652d8edc7e08b3f

// Items in a collection.
export default function Items() {
  const { id } = useParams();
  // const [collectionItems, setCollectionItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Handles axios call on mount.
  useEffect(() => {
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      console.log(res.data.item);
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
          id ={id}
        />
      ) : (
        <>
          <ItemsView items={items} id={id} />
          <Button onClick={handleOpen}>Add Item</Button>
        </>
      )}
    </div>
  );
}
