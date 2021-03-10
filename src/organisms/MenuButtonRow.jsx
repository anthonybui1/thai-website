import MenuButton from '../molecules/MenuButton.jsx';

const MenuButtonRow = () => {
	return (
		<div className='mr-8 space-x-7'>
			<MenuButton text='home' link='/' />
			<MenuButton text='menu' link='/menu' />
			<MenuButton text='gallery' link='/gallery' />
			<MenuButton text='contact' link='/contact' />
			<MenuButton text='order' link='https://direct.chownow.com/order/20484/locations/29585' />
		</div>
	);
};

export default MenuButtonRow;
