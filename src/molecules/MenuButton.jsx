import React from 'react';
import { Link } from 'react-router-dom';

const MenuButton = (props) => {
	const handleClick = () => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
	};

	const buttonRender = (
		<button className='rounded font-semibold text-xl px-4 py-2 hover:bg-gray-700 transition duration-500 transform hover:scale-110 text-white focus:ring-2 focus:ring-white'>
			{props.text}
		</button>
	);

	const orderButton = (
		<a href='https://direct.chownow.com/order/20484/locations/29585' target='_blank'>
			{buttonRender}
		</a>
	);

	const browserRouteButton = (
		<Link onClick={handleClick} to={props.link}>
			{buttonRender}
		</Link>
	);

	return (
		<React.Fragment>{props.link.length < 10 ? browserRouteButton : orderButton}</React.Fragment>
	);
};

export default MenuButton;
