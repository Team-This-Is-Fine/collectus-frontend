import ItemItem from '../ItemItem/ItemItem';

export default function ItemList({ Items }) {
	return (
		<div>
			<p>Item List loaded</p>

			{Items.map((ItemItem) => {
				return <ItemItem ItemItem={ItemItem} />;
			})}
		</div>
	);
}
