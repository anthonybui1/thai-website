const HomeCard = ({ img, title, descript, price}) => {
	return (
		<div className="w-10/12 h-auto space-y-2 max-w-xl">
			<img src={img} className="rounded shadow-md" loading='lazy' alt="One of our delicious specials" />
			<h1 className="text-center font-black">{title}</h1>
			<div className="flex justify-evenly items-center">
				<p className="text-center mr-4">{descript}</p>
				<p className="text-center mr-4 font-black">{price}</p>
			</div>
		</div>
	);
};

export default HomeCard;
