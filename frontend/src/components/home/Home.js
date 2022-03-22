import CollectionList from '../collectionList/CollectionList';
import { CollectionsContext } from '../../CollectionsContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';

export default function Home()
{
	const [collections, setCollections] = useState([]);

	useEffect(() =>
	{
		axios
			.get("http://localhost:8000/api/collections/")
			.then((res) =>
			{
				return res.json();
			})
			.then((data) =>
			{
				setCollections([...data]);
			});
	}, []);

	console.log(collections);

	return (
		<div className='home-container'>
			<p>Home loaded</p>
			<CollectionsContext.Provider value={{}}>
				<CollectionList collections={collections} />
				<ItemList />
			</CollectionsContext.Provider>
		</div>
	);
}
