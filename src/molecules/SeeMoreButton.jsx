import { Link } from 'react-router-dom';

const SeeMoreButton = () => {
	return (
		<Link to='/menu'>
			<button className='text-3xl font-bold border-2 py-4 px-8 rounded-xl shadow-xl bg-yellow-400 border-transparent dark:text-black'>
				<span className='animate-pulse'>see more</span>
			</button>
		</Link>
	);
};

export default SeeMoreButton;
