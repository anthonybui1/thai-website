const Button = (props) => {
	return (
		<button className="rounded font-semibold text-xl px-4 py-2 hover:bg-gray-700 transition duration-500 transform hover:scale-110 text-white">
			<a href={props.link}>
				{props.text}
			</a>
		</button>
	);
};

export default Button;
