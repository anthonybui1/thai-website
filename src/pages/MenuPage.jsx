import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import FirstBites from '../categories/FirstBites';
import FriedRice from '../categories/FriedRice';
import RefreshingDishes from '../categories/RefreshingDishes';
import Soups from '../categories/Soups';
import Curry from '../categories/Curry';
import Noodles from '../categories/Noodles';
import StirFry from '../categories/StirFry';
import ClassicDishes from '../categories/ClassicDishes';
import BeveragesAndDesserts from '../categories/BeveragesAndDesserts';

const MenuPage = () => {
	let { path, url } = useRouteMatch();

	return (
		<div className='w-full'>
			<div className='text-2xl mt-8 w-full flex flex-wrap justify-center'>
				<Link
					className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'
					to={`${url}/firstbites`}
				>
					First Bites
				</Link>

				<Link className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800' to={`${url}/soups`}>
					Soups
				</Link>

				<Link
					className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'
					to={`${url}/refreshingdishes`}
				>
					Refreshing Dishes
				</Link>

				<Link className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800' to={`${url}/friedrice`}>
					Fried Rice
				</Link>

				<Link className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800' to={`${url}/curry`}>
					Curry
				</Link>

				<Link className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800' to={`${url}/noodles`}>
					Noodles
				</Link>

				<Link className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800' to={`${url}/stirfry`}>
					Stir Fry
				</Link>

				<Link
					className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'
					to={`${url}/classicdishes`}
				>
					Titaya's Classic Dishes
				</Link>

				<Link
					className='border-2 m-2 px-4 py-2 rounded-lg border-gray-800'
					to={`${url}/beveragesanddesserts`}
				>
					Beverages & Desserts
				</Link>
			</div>
			<div className='my-12 px-4'>
				<Switch>
					<Route exact path={`${path}/firstbites`} component={FirstBites} />
					<Route exact path={`${path}/soups`} component={Soups} />
					<Route exact path={`${path}/refreshingdishes`} component={RefreshingDishes} />
					<Route exact path={`${path}/friedrice`} component={FriedRice} />
					<Route exact path={`${path}/curry`} component={Curry} />
					<Route exact path={`${path}/noodles`} component={Noodles} />
					<Route exact path={`${path}/stirfry`} component={StirFry} />
					<Route exact path={`${path}/classicdishes`} component={ClassicDishes} />
					<Route exact path={`${path}/beveragesanddesserts`} component={BeveragesAndDesserts} />
				</Switch>
			</div>
		</div>
	);
};

export default MenuPage;
