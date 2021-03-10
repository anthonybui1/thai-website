import React from 'react';

const LocationPage = () => {
	return (
		<section className='w-full flex flex-col px-4 md:flex-row md:justify-center md:items-start md:h-screen'>
			<div className='flex flex-col md:w-1/3 md:mt-20 md:mx-14'>
				<div className='my-4 text-center space-y-2'>
					<h2 className='font-bold'>Hours of Operation</h2>
					<p>Tuesday-Sunday</p>
					<p>11:30am-9:30pm</p>
					<p>Closed Monday</p>
				</div>
				<div className='my-4 text-center space-y-2'>
					<p>We do not accept reservations</p>
					<p>All vegetarian and tofu dishes are prepared vegan. We do not use MSG</p>
					<p>No separated checks. No personal checks</p>
					<p>*Changes and modifications are politely declined</p>
					<p>Payment Options include Visa, Mastercard, Discover, and Cash</p>
				</div>
				<div className='my-4 text-center space-y-2'>
					<h2 className='font-bold'>Location</h2>
					<address>
						5501 North Lamar Blvd <br />
						Suite C101 <br />
						Austin, TX 78751 <br />
						(512) 458-1792 <br />
						(512) 592-2812 <br />
					</address>
				</div>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8191.234194445563!2d-97.73009874214328!3d30.32280980491718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x364ed70bbade3b55!2sTitaya&#39;s%20Thai%20Cuisine!5e0!3m2!1sen!2sus!4v1615334091981!5m2!1sen!2sus'
				style={{ border: '0' }}
				allowfullscreen=''
				loading='lazy'
				className='h-96 md:w-full md:h-5/6 md:mt-8'
			></iframe>
		</section>
	);
};

export default LocationPage;
