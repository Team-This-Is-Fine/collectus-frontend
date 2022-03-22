import Item from '../item/Item';

export default function ItemList({ itemList }) {
	return (
		<div>
			<>item list loaded</>

			{itemList.map((item) => {
				return <Item item={item} />;
			})}
		</div>
	);
}
