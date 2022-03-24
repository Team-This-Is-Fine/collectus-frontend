import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CollectionsView from '../collectionsView/CollectionsView';

export default function Collections()
{
	const [collections, setCollections] = useState([]);

	useEffect(() =>
	{
		axios
			.get('http://localhost:8000/api/collections/')
			.then((res) =>
			{
				setCollections([...res.data]);
			});
	}, []);

	console.log(collections);

	function handleCollectionClick(event)
	{
		console.log(event);
	}

	return (
		<div className='home-container'>
			<CollectionsView collections={collections} handleCollectionClick={handleCollectionClick} />
		</div>
	);
}
