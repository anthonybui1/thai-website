import React from 'react';
import { noodles } from '../assets/menuData';

const Noodles = () => {
	return (
		<div className='space-y-4'>
			{noodles.map((item, index) => {
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

export default Noodles;
