import CollectionItem from '../collectionItem/CollectionItem';

export default function CollectionsList({ collections })
{
	return (
		<div>
			{collections.map((element, index) =>
			{
				return <CollectionItem collectionItem={element} key={index} />;
			})}
		</div>
	);
}
