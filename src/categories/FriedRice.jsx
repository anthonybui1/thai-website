import React from 'react';
import { friedRice } from '../assets/menuData';

const FriedRice = () => {
	return (
		<div className='space-y-4'>
			{friedRice.map((item) => {
				return (
					<div className='md:text-center'>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<React.Fragment>
							{item.price.map((price) => {
								return <p>{price}</p>;
							})}
						</React.Fragment>
					</div>
				);
			})}
		</div>
	);
};

export default FriedRice;
