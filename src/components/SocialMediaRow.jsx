const SocialMediaRow = () => {
	return (
		<>
			<h1 className="mt-3 font-black">follow us on social media!</h1>
			<div className="flex justify-evenly w-8/12 max-w-screen-lg text-7xl my-3 space-x-4">
				<i className="fab fa-facebook-square text-blue-500 transform hover:translate-y-1" />
				<i className="fab fa-instagram-square text-yellow-900 transform hover:translate-x-1" />
				<i className="fab fa-twitter-square text-blue-600 transform hover:rotate-12" />
				<i className="fab fa-youtube text-red-500 transform hover:scale-105" />
			</div>
		</>
	);
};

export default SocialMediaRow;
