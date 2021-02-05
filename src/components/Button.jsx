const Button = (props) => {
	return (
		<button className="bg-yellow-300 rounded font-semibold text-xl px-5 py-2 hover:bg-yellow-400 transition duration-500 transform hover:scale-110 shadow-lg">
			{props.text}
		</button>
	);
};

export default Button;
