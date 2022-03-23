import CollectionItem from '../collectionItem/CollectionItem';

export default function CollectionList({ collections }) {
	return (
		<div>
			<p>Item List loaded</p>
			{collections.map((element) => {
				return <CollectionItem collectionItem={element} />;
			})}
		</div>
	);
}
