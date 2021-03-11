import React from 'react';
import { curry } from '../assets/menuData';

const Curry = () => {
	return (
		<div className='space-y-4'>
			{curry.map((item) => {
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

export default Curry;
