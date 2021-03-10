import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import FirstBites from '../categories/FirstBites';
import Soups from '../categories/Soups';

const MenuPage = () => {
	let { path, url } = useRouteMatch();

	return (
		<div className='w-full'>
			<ul className='text-2xl my-4 w-full flex flex-wrap justify-center'>
				<li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/firstbites`}>First Bites</Link>
				</li>
				<li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/soups`}>Soups</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/refreshingdishes`}>Refreshing Dishes</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/friedrice`}>Fried Rice</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/curry`}>Curry</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/noodles`}>Noodles</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/stirfry`}>Stir Fry</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/classicdishes`}>Titaya's Classic Dishes</Link>
				</li>
        <li className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'>
					<Link to={`${url}/beveragesanddesserts`}>Beverages & Desserts</Link>
				</li>
			</ul>
			<div className='my-12'>
				<Switch>
					<Route exact path={`${path}/firstbites`} component={FirstBites} />
					<Route exact path={`${path}/soups`} component={Soups} />
				</Switch>
			</div>
		</div>
	);
};

export default MenuPage;
