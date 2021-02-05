const BigButton = ({ text, link }) => {
	return (
		<button className="text-3xl font-bold border-2 py-4 px-8 rounded-xl shadow-xl bg-yellow-400">
			<a href={link} target="_blank">
				<span className="animate-pulse">{text}</span>
			</a>
		</button>
	);
};

export default BigButton;
