import CardView from "../cardView/CardView";

export default function CollectionsList({ collections })
{
	return (
		<div>
			{collections.map((collection, index) =>
			{
				return (
					<CardView collection={collection} key={index} />
				)
			})}
		</div>
	);
}
