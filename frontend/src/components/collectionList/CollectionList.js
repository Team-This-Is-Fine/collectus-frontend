import CollectionItem from '../collectionItem/CollectionItem';
import React, { useState, useEffect } from 'react';

export default function CollectionList({ collections })
{
	return (
		<div>
			<p>Collection List loaded</p>

			{collections.map((collectionItem) =>
			{
				return <CollectionItem collectionItem={collectionItem} />;
			})}

		</div>
	);
}
