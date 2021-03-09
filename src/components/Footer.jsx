import SocialMediaRow from './SocialMediaRow';

const Footer = () => {
	return (
		<footer className="w-screen h-auto bg-gray-200 mt-12 flex flex-col items-center dark:bg-gray-800">
			<SocialMediaRow />
			<p className="text-center text-xs m-5">
				this is a mock site, the logo and content belong solely to titaya's thai
				cuisine of austin, tx. please visit{' '}
				<a
					href="http://titayasthaicuisine.com/index.html"
					className="border-black text-blue-700"
				>
					their actual site for more details
				</a>
				, or click order now to visit their chownow!
			</p>
		</footer>
	);
};

export default Footer;
