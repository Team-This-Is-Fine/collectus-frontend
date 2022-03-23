import Item from '../item/Item';

export default function ItemList({ itemList })
{
	return (
		<div>
			{itemList.map((item, index) =>
			{
				return <Item item={item} key={index} />;
			})}
		</div>
	);
}