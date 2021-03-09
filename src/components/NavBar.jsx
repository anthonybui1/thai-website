import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../branding/logo.png';
import MenuButtonRow from './MenuButtonRow.jsx';
import MobileMenu from './MobileMenu.jsx';
import NightModeButton from './NightModeButton.jsx';

const NavBar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [menuShow, setMenuShow] = useState(false);
	const history = useHistory();

	const handleLogoClick = () => {
		history.push('/');
		window.scrollTo(0, 0);
	};

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
				<i className='fas fa-bars text-3xl mx-8 text-yellow-300'></i>
			</button>
		);
	};

	const handleClick = () => {
		setMenuShow(!menuShow);
	};

	return (
		<>
			<nav className='dark:bg-gray-800 bg-black w-screen flex justify-center fixed z-20'>
				<div className='flex flex-auto flex-row items-center justify-between max-w-screen-2xl'>
					<div className='flex items-center'>
						<img src={logo} className='w-16 ml-8 cursor-pointer' onClick={handleLogoClick} />
						<NightModeButton />
					</div>
					{showMenu()}
				</div>
			</nav>
			<MobileMenu menuShow={menuShow} setMenuShow={setMenuShow} />
		</>
	);
};

export default NavBar;
