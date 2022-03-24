import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CollectionsView from '../collectionsView/CollectionsView';

// Home page.
export default function Collections()
{
	const [collections, setCollections] = useState([]);

	// Handles axios call on mount.
	useEffect(() =>
	{
		axios
			.get('http://localhost:8000/api/collections/')
			.then((res) =>
			{
				setCollections([...res.data]);
			});
	}, []);

	// Handles no collections.
	if (!collections.length)
	{
		return "Loading";
	}

	return (
		<div className='home-container'>
			<CollectionsView collections={collections} />
			<Link to={`/collections/add-collection`}>
				<button>Add Collection</button>
			</Link>
		</div>
	);
}
