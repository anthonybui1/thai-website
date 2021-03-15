import React from 'react';
import { friedRice } from '../assets/menuData';

const FriedRice = () => {
	return (
		<div className='space-y-4'>
			{friedRice.map((item, index) => {
				return (
					<div className='md:text-center' key={index}>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<React.Fragment>
							{item.price.map((price, index) => {
								return <p key={index}>{price}</p>;
							})}
						</React.Fragment>
					</div>
				);
			})}
		</div>
	);
};

export default FriedRice;
