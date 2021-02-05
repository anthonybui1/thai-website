import { Link } from 'react-router-dom';

const SeeMoreButton = () => {
	return (
		<button className="text-3xl font-bold border-2 py-4 px-8 rounded-xl shadow-xl bg-yellow-400">
			<Link to="/menu">
				<span className="animate-pulse">see more</span>
			</Link>
		</button>
	);
}

export default SeeMoreButton;