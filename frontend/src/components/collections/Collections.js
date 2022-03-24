import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CollectionsForm from '../collectionsForm/CollectionsForm';
import CollectionsView from '../collectionsView/CollectionsView';

// Home page.
export default function Collections()
{
	const [collections, setCollections] = useState([]);
	const [showModal, setShowModal] = useState(false);

	// Handles axios call on mount.
	useEffect(() =>
	{
		axios.get('http://localhost:8000/api/collections/').then((res) =>
		{
			setCollections([...res.data]);
		});
	}, []);

	// Handles no collections.
	if (!collections.length)
	{
		return 'Loading';
	}

	function handleOpen()
	{
		setShowModal(true);
	}

	return (
		<div className='home-container'>
			{showModal ? (
				<CollectionsForm setShowModal={setShowModal}
					showModal={showModal}
					collections={collections}
					setCollections={setCollections} />
			) : (
				<>
					<CollectionsView collections={collections} />
					<button onClick={handleOpen}>Add Collection</button>
				</>
			)}
		</div>
	);
}
