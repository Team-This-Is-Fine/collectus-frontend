import CollectionList from '../collectionList/CollectionList';
import { CollectionsContext } from '../../CollectionsContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';

export default function Home() {
	const initial = [
		{
			name: 'Charizard',
			img: 'https://cdn.vox-cdn.com/thumbor/aTpc2EBNNziHe_FGzeYPOM9XtGU=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67623597/charizard_cropped.0.jpg',
			description: 'Cool pokemon card!!!',
			duplicates: 12,
		},
		{
			name: 'Neil Young - Heart of Gold LP',
			img: 'https://static.stereogum.com/uploads/2019/02/Neil-Young-Heart-Of-Gold-1550680171.jpg',
			description: 'Super expensive first pressing 1967',
			duplicates: 2,
		},
	];

	const [collections, setCollections] = useState([]);
	const [thisCollection, setThisCollection] = useState(initial);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/collections/')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCollections([...data]);
			});
	}, []);

	console.log(collections);

	return (
		<div className='home-container'>
			<p>Home loaded</p>
			<CollectionsContext.Provider value={{}}>
				<CollectionList collections={collections} />
				<ItemList itemList={thisCollection} />
			</CollectionsContext.Provider>
		</div>
	);
}
