import { Link } from 'react-router-dom';

const MobileMenu = ({ setMenuShow, menuShow }) => {
	const handleClick = () => {
		setMenuShow(false);
	};

	return (
		<ul
			className={`w-screen h-screen dark:bg-gray-900 bg-gray-100 fixed pt-16 z-10 opacity-90 transform transition-transform duration-500 flex flex-col justify-center space-y-10 ${
				menuShow ? '' : '-translate-y-full'
			}`}
		>
			<Link to='/' onClick={handleClick}>
				<li className='text-center text-2xl p-4 transition duration-500 hover:bg-yellow-200 cursor-pointer'>
					home
				</li>
			</Link>
			<Link to='/menu' onClick={handleClick}>
				<li className='text-center text-2xl p-4 transition duration-500 hover:bg-yellow-200 cursor-pointer'>
					menu
				</li>
			</Link>
			<Link to='/gallery' onClick={handleClick}>
				<li className='text-center text-2xl p-4 transition duration-500 hover:bg-yellow-200 cursor-pointer'>
					gallery
				</li>
			</Link>
			<Link to='/contact' onClick={handleClick}>
				<li className='text-center text-2xl p-4 transition duration-500 hover:bg-yellow-200 cursor-pointer'>
					contact
				</li>
			</Link>
			<a
				href='https://direct.chownow.com/order/20484/locations/29585'
				target='_blank'
				onClick={handleClick}
			>
				<li className='text-center text-2xl p-4 transition duration-500 hover:bg-yellow-200 cursor-pointer'>
					order
				</li>
			</a>
		</ul>
	);
};

export default MobileMenu;
