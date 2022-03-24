import ItemsView from '../itemsView/ItemsView';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Items()
{
	const { id } = useParams();
	const [collectionItems, setCollectionItems] = useState([]);

	useEffect(() =>
	{
		axios
			.get(`http://localhost:8000/api/collections/${id}`)
			.then((res) =>
			{
				console.log(res.item);
				setCollectionItems([...res.item]);
			});
	}, []);

	return (
		<div className="items-container">
			<ItemsView collectionItems={collectionItems} />
		</div>
	);
}