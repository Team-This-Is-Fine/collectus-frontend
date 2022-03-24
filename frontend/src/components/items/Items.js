import ItemsView from '../itemsView/ItemsView';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Items in a collection.
export default function Items()
{
	const { id } = useParams();
	const [collectionItems, setCollectionItems] = useState([]);

	// Handles axios call on mount.
	useEffect(() =>
	{
		axios
			.get(`http://localhost:8000/api/collections/${id}`)
			.then((res) =>
			{
				setCollectionItems([...res.data.item]);
			});
	}, []);

	// Handles no items.
	if (!collectionItems.length)
	{
		return "Loading";
	}

	return (
		<div className="items-container">
			<ItemsView collectionItems={collectionItems} />
			<Link to={`/items/add-item`}>
				<button>Add Item</button>
			</Link>
		</div>
	);
}