import { useEffect, useState } from 'react';
import logo from '../branding/logo.png';
import MenuButtonRow from './MenuButtonRow.jsx';
import MobileMenu from './MobileMenu.jsx';
import NightModeButton from './NightModeButton.jsx';

const NavBar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [menuShow, setMenuShow] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});

		if (menuShow && windowWidth > 768) {
			setMenuShow(!menuShow);
		}

		return window.removeEventListener('resize', () => {
			console.log('Resize listener cleaned up');
		});
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 768 ? (
			<MenuButtonRow />
		) : (
			<button onClick={handleClick}>
				<i className="fas fa-bars text-3xl mx-8 text-yellow-300"></i>
			</button>
		);
	};

	const handleClick = () => {
		setMenuShow(!menuShow);
	};

	return (
		<>
			<nav className="bg-black w-screen flex justify-center fixed z-10">
				<div className="flex flex-auto flex-row items-center justify-between max-w-screen-2xl">
					<div className="flex items-center">
						<img src={logo} className="w-20 ml-8" />
						<NightModeButton />
					</div>
					{showMenu()}
				</div>
			</nav>
			<div
				className={
					menuShow
						? 'w-screen bg-gray-100 fixed top-20 z-10 opacity-95'
						: 'hidden'
				}
			>
				<MobileMenu setMenuShow={setMenuShow} />
			</div>
		</>
	);
};

export default NavBar;
