import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Showcase from './organisms/Showcase';
import Footer from './organisms/Footer';

import AttentionButton from './molecules/AttentionButton';
import SeeMoreButton from './molecules/SeeMoreButton';

import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import MenuPage from './pages/MenuPage';

const App = () => {
	const orderLink = 'https://direct.chownow.com/order/20484/locations/29585';

	return (
		<BrowserRouter>
			<main className='flex flex-col items-center dark:bg-gray-900 dark:text-white transition-all duration-500'>
				<Header />
				<Switch>
					<Route path='/contact'>
						<LocationPage />
					</Route>
					<Route path='/gallery'>
						<GalleryPage />
					</Route>
					<Route path='/menu'>
						<MenuPage />
					</Route>
					<Route path='/'>
						<div className='max-w-screen-xl flex flex-col items-center space-y-12'>
							<Hero />
							<AttentionButton text='get delivery now!' link={orderLink} />
							<Showcase />
							<SeeMoreButton />
						</div>
					</Route>
				</Switch>
				<Footer />
			</main>
		</BrowserRouter>
	);
};

export default App;
