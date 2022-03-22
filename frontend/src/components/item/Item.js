export default function Item({ item }) {
	return (
		<div>
			<h2>{item.name}</h2>
			<img
				// needs ternary.
				src={item.img}
				alt={item.name}
			/>
			<p>{Item.description}</p>
			<p>{item.duplicated}</p>
		</div>
	);
}
