import CollectionList from '../collectionList/CollectionList';
import { CollectionsContext } from '../../CollectionsContext';
import axios from 'axios';
import React, { useState, useEffect, useDebugValue } from 'react';

export default function Home() {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCollections([...data]);
			});
	}, []);

	return (
		<div className='home-container'>
			<p>Home loaded</p>
			<CollectionsContext.Provider value={{}}>
				<CollectionList />
			</CollectionsContext.Provider>
		</div>
	);
}
