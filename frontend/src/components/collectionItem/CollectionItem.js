export default function CollectionItem({ collectionItem }) {
	return (
		<div>
			<h2>{collectionItem.name}</h2>
			<img
				// needs ternary.
				src={collectionItem.img}
				alt={collectionItem.name}
			/>
			<p>{collectionItem.description}</p>
			<p>{collectionItem.amount}</p>
		</div>
	);
}
