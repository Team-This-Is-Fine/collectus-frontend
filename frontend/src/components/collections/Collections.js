import axios from "axios";
import React, { useState, useEffect } from "react";
import CollectionsForm from "../collectionsForm/CollectionsForm";
import CollectionsView from "../collectionsView/CollectionsView";
// import { CollectionContext } from '.../CollectionContext';

// Home page.
export default function Collections()
{
	const [collections, setCollections] = useState([]);
	const [collectionId, setCollectionId] = useState(null);
	const [showModal, setShowModal] = useState(false);

	// Handles axios call on mount.
	useEffect(() =>
	{
		axios.get("http://localhost:8000/api/collections/")
			.then((res) =>
			{
				setCollections([...res.data]);
			})
	}, []);

	// Handles no collections.
	if (!collections.length)
	{
		return "Loading";
	}

	function handleOpen()
	{
		setShowModal(true);
	}

	return (
		<div className="home-container">
			<CollectionsView
				collections={collections}
				collectionId={collectionId}
				setCollectionId={setCollectionId}
				setShowModal={setShowModal}
				showModal={showModal} />

			<button onClick={handleOpen}>Add Collection</button>
			{showModal &&
				<CollectionsForm
					collectionId={collectionId}
					setCollectionId={setCollectionId}
					setShowModal={setShowModal}
				/>
			}
		</div>
	);
}
