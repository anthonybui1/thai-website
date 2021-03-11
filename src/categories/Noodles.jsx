import React from 'react';
import { noodles } from '../assets/menuData';

const Noodles = () => {
	return (
		<div className='space-y-4'>
			{noodles.map((item) => {
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

export default Noodles;
