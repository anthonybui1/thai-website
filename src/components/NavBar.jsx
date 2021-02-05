import logo from '../branding/logo.png';
import ButtonRow from './ButtonRow.jsx';
import MobileMenu from './MobileMenu.jsx';
import { useEffect, useState } from 'react';

const NavBar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [menuShow, setMenuShow] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});

		if (menuShow && windowWidth > 768) {
			setMenuShow(!menuShow);
		};

		return window.removeEventListener('resize', () => {
			console.log('Resize listener cleaned up');
		});
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 768 ? (
			<ButtonRow />
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
			<nav className="bg-green-700 w-screen flex justify-center">
				<div className="flex flex-auto flex-row items-center justify-between max-w-screen-2xl">
					<img src={logo} className="w-20 ml-8" />
					{showMenu()}
				</div>
			</nav>
			<div className={menuShow ? 'w-screen bg-gray-100 fixed top-20 z-10 opacity-95' : 'hidden'}>
        <MobileMenu />
			</div>
		</>
	);
};

export default NavBar;
