import React from 'react';
import { classics } from '../assets/menuData';

const ClassicDishes = () => {
	return (
		<div className='space-y-4'>
			{classics.map((item) => {
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

export default ClassicDishes;
