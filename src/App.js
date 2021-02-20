import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import AttentionButton from './components/AttentionButton.jsx';
import SeeMoreButton from './components/SeeMoreButton.jsx';
import Footer from './components/Footer.jsx';
import ImageGrid from './components/ImageGrid.jsx';

const App = () => {
	const orderLink = 'https://direct.chownow.com/order/20484/locations/29585';

	return (
		<BrowserRouter>
			<div className="flex flex-col items-center dark:bg-gray-900 dark:text-white transition duration-500">
				<NavBar />
				<Switch>
					<Route path="/contact">
						<div className="h-screen flex flex-col items-center justify-center">
							<h1 className="text-4xl">Coming soon!</h1>
						</div>
					</Route>
					<Route path="/gallery">
						<ImageGrid />
					</Route>
					<Route path="/menu">
						<div className="h-screen flex flex-col items-center justify-center">
							<h1 className="text-4xl">Coming soon!</h1>
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
			</div>
		</BrowserRouter>
	);
};

export default App;
