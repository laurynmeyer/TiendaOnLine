import { Item } from "../Item/Item"
import React from 'react';

export const ItemList = ({ list }) => (
	<>
		{!list.length && "Loading"}
		{list.map(item => (
			<Item key={item.id} item={item} />
		))}
	</>
)



