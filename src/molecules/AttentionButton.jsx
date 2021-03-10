const AttentionButton = ({ text, link }) => {
	return (
		<a href={link} target='_blank'>
			<button className='text-3xl font-bold border-2 py-4 px-8 rounded-xl shadow-xl bg-yellow-400 dark:text-black border-transparent'>
				<span className='animate-pulse'>{text}</span>
			</button>
		</a>
	);
};

export default AttentionButton;
