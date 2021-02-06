const SocialMediaRow = () => {
	return (
		<>
			<h1 className="my-6 font-black">follow us on social media!</h1>
			<div className="flex justify-evenly w-8/12 max-w-screen-lg text-6xl mb-6 space-x-4">
				<a href="https://www.facebook.com/Titayas-Thai-Cuisine-367337886743915/" target="_blank">
					<i className="fab fa-facebook-square text-blue-500 transform hover:translate-y-1" />
				</a>
				<a href="https://www.instagram.com/" target="_blank">
					<i className="fab fa-instagram-square text-yellow-900 transform hover:translate-x-1" />
				</a>
				<a href="https://www.twitter.com/" target="_blank">
					<i className="fab fa-twitter-square text-blue-600 transform hover:rotate-12" />
				</a>
				<a href="https://www.youtube.com/" target="_blank">
					<i className="fab fa-youtube text-red-500 transform hover:scale-105" />
				</a>
			</div>
		</>
	);
};

export default SocialMediaRow;
