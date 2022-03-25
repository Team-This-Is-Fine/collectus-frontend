<<<<<<< HEAD
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CollectionsForm from '../collectionsForm/CollectionsForm';
import ItemsForm from '../itemsForm/ItemsForm';
import ItemsView from '../itemsView/ItemsView';
import CollectionsView from '../collectionsView/CollectionsView';
=======
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemsForm from "../itemsForm/ItemsForm";
import ItemsView from "../itemsView/ItemsView";
import { Button } from "react-bootstrap";
>>>>>>> 9eed85ed47ab56ed08efff748ca6bc220dbbc91e

// Items in a collection.
export default function Items() {
	const { id } = useParams();
	// const [collectionItems, setCollectionItems] = useState([]);
	const [items, setItems] = useState([]);
	const [showModal, setShowModal] = useState(false);

<<<<<<< HEAD
	// Handles axios call on mount.
	useEffect(() => {
		axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
			console.log(res.data.items);
			setItems([...res.data.item]);
		});
	}, []);
=======
  // Handles axios call on mount.
  useEffect(() => {
    axios.get(`http://localhost:8000/api/collections/${id}`).then((res) => {
      console.log(res.data.item);
      setItems([...res.data.item]);
    });
  }, [id]);
>>>>>>> 9eed85ed47ab56ed08efff748ca6bc220dbbc91e

	// Handles no collections.
	if (!items.length) {
		return 'Loading';
	}

	function handleOpen() {
		setShowModal(true);
	}

<<<<<<< HEAD
	return (
		<div className='home-container'>
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
=======
  return (
    <div className="home-container">
      {showModal ? (
        <ItemsForm
          setShowModal={setShowModal}
          showModal={showModal}
          items={items}
          setItems={setItems}
          id={id}
        />
      ) : (
        <>
          <ItemsView items={items} id={id} />
          <Button onClick={handleOpen}>Add Item</Button>
        </>
      )}
    </div>
  );
>>>>>>> 9eed85ed47ab56ed08efff748ca6bc220dbbc91e
}
