import Button from './Button.jsx';

const ButtonRow = () => {
	return (
		<div className="mr-8 space-x-7">
      <Button text="Home" />
      <Button text="Menu" />
      <Button text="Gallery" />
      <Button text="Contact" />
      <Button text="Order" />
		</div>
	);
};

export default ButtonRow;
