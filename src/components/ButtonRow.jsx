import Button from './Button.jsx';

const ButtonRow = () => {
	return (
		<div className="mr-8 space-x-7">
      <Button text="home" link="/" />
      <Button text="menu" link="/menu" />
      <Button text="gallery" link="/gallery" />
      <Button text="contact" link="/contact" />
      <Button text="order" link="https://direct.chownow.com/order/20484/locations/29585" />
		</div>
	);
};

export default ButtonRow;
