import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				// scroll Y more than 100 px
				handleShow(true); // nav bar will be visible background
			} else handleShow(false); // or not meet condition => don't show
		});
		return () => {
			window.removeEventListener('scroll'); //! avoid repeat EventListener
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav--scroll'}`}>
			<img
				className='nav_logo'
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png'
				alt='Netflix Logo'
			/>
			<img
				className='nav_avatar'
				src='https://occ-0-395-64.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFJEwjyRPHh82xsHWjg7_snFujouP1Qf0hSeayTP98rxPJQKPInwcAm-72OoPsjg_xj3Y4HkM0hJCtJe2qqTWaPBUJA.png?r=a41'
				alt='Netflix Avatar'
			/>
		</div>
	);
}

export default Nav;
