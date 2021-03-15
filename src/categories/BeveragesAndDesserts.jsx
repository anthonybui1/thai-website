import React from 'react';
import { beverages, desserts } from '../assets/menuData';

const BeveragesAndDesserts = () => {
	return (
		<div className='space-y-4'>
			{beverages.map((item, index) => {
				return (
					<div className='text-center' key={index}>
						<h1>
							{item.title} {item.price}
						</h1>
					</div>
				);
			})}
			{desserts.map((item, index) => {
				return (
					<div className='text-center' key={index}>
						<h1>
							{item.title} {item.price}
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default BeveragesAndDesserts;
