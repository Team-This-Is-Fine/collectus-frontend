import { CollectionsContext } from '../../CollectionsContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Item from '../item/Item';
import CollectionView from '../collectionView/CollectionView';

export default function Home()
{
	const [collections, setCollections] = useState([]);
	const [thisCollection, setThisCollection] = useState(null);

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
	console.log(thisCollection);

	function handleClick(event)
	{
		console.log(event);
	}

	return (
		<div className='home-container'>
			<CollectionsContext.Provider value={{}}>
				<CollectionView collections={collections} handleClick={handleClick} />
				<Item collection={thisCollection} />
			</CollectionsContext.Provider>
		</div>
	);
}
