import React from 'react';
import { refreshingDishes } from '../assets/menuData';

const RefreshingDishes = () => {
	return (
		<div className='space-y-4'>
			{refreshingDishes.map((item, index) => {
				return (
					<div className='md:text-center' key={index}>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
};

export default RefreshingDishes;
