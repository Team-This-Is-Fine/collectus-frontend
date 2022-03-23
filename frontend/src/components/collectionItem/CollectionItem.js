import Carousel from 'react-bootstrap/Carousel';

export default function CollectionItem({ collectionItem })
{
	return (
		<Carousel style={{ minHeight: "25vh" }}>
			{collectionItem.item.map((item, index) =>
			{
				return (
					<Carousel.Item key={index} style={{ maxHeight: "25vh" }}>
						<Carousel.Caption>
							<h3>{item.name}</h3>
						</Carousel.Caption>
						<img
							className="d-block w-100"
							style={{
								height: "25vh",
								width: "50%",
								objectFit: "cover",
								overflow: "hidden"
							}}
							src={item.img}
							alt={item.name}
						/>
						<Carousel.Caption>
							<h3>{item.description}</h3>
						</Carousel.Caption>
					</Carousel.Item>
				)
			})}
		</Carousel>
		// <div>
		// 	<h2>{collectionItem.name}</h2>
		// 	<img
		// 		// needs ternary.
		// 		src={collectionItem.img}
		// 		alt={collectionItem.name}
		// 	/>
		// 	<p>{collectionItem.description}</p>
		// 	<p>{collectionItem.amount}</p>
		// </div>
	);
}
