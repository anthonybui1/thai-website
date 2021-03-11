import React from 'react';
import { beverages, desserts } from '../assets/menuData';

const BeveragesAndDesserts = () => {
	return (
		<div className='space-y-4'>
			{beverages.map((item) => {
				return (
					<div className='text-center'>
						<h1>
							{item.title} {item.price}
						</h1>
					</div>
				);
			})}
			{desserts.map((item) => {
				return (
					<div className='text-center'>
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
