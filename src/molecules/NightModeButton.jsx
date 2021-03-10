import { useState } from 'react';

const NightModeButton = () => {
	const [darkStatus, setDarkStatus] = useState(false);

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark');
		setDarkStatus(!darkStatus);
	};

	return (
		<div className='mx-4 transform hover:scale-110 cursor-pointer' onClick={toggleDarkMode}>
			{darkStatus ? (
				<i class='far fa-sun text-2xl text-yellow-400' />
			) : (
				<i className='far fa-moon text-2xl text-white' />
			)}
		</div>
	);
};

export default NightModeButton;
