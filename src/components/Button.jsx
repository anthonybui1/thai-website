import { Link } from 'react-router-dom';

const Button = (props) => {
	return (
		<button className="rounded font-semibold text-xl px-4 py-2 hover:bg-gray-700 transition duration-500 transform hover:scale-110 text-white">
			{props.link.length < 10 ? (
				<Link to={props.link}>{props.text}</Link>
			) : (
				<a href={props.link} target="_blank">
					{props.text}
				</a>
			)}
		</button>
	);
};

export default Button;
