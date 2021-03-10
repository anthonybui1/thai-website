import React from 'react';
import { firstBites } from '../assets/menuData';

const FirstBites = () => {
	return (
		<div className='space-y-4'>
			{firstBites.map((item) => {
				return (
					<div className='md:text-center'>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FirstBites;
