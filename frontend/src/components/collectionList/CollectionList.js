import CollectionItem from '../collectionItem/CollectionItem';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CollectionList() {
	return (
		<div>
			<>Collection List loaded</>

			<CollectionItem />
		</div>
	);
}
