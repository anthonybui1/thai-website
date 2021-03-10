import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './organisms/Header.jsx';
import Hero from './organisms/Hero.jsx';
import Showcase from './organisms/Showcase.jsx';
import Footer from './organisms/Footer.jsx';

import AttentionButton from './molecules/AttentionButton.jsx';
import SeeMoreButton from './molecules/SeeMoreButton.jsx';

import GalleryPage from './pages/GalleryPage.jsx';
import LocationPage from './pages/LocationPage';

const App = () => {
	const orderLink = 'https://direct.chownow.com/order/20484/locations/29585';

	return (
		<BrowserRouter>
			<main className="flex flex-col items-center dark:bg-gray-900 dark:text-white transition-all duration-500">
				<Header />
				<Switch>
					<Route path="/contact">
							<LocationPage />
					</Route>
					<Route path="/gallery">
						<GalleryPage />
					</Route>
					<Route path="/menu">
						<div className="h-screen flex flex-col">
							<h1 className="text-4xl mt-32">Coming soon!</h1>
						</div>
					</Route>
					<Route path="/">
						<div className="max-w-screen-xl flex flex-col items-center space-y-12">
							<Hero />
							<AttentionButton text="get delivery now!" link={orderLink} />
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
