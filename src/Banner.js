import React, { useState, useEffect } from 'react';
import axios from './axios';
import req, { img_url } from './requests';

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(req.fetchTrendingWeek);
			setMovie(request.data.results[Math.floor(Math.random() * 5)]);
			return request;
		}
		fetchData();
	}, []);

	// shorten strings with given NUMBER
	//string.length > NUMBER? string substract from 0 to NUMBER - 1 : strings
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${img_url}${movie.backdrop_path})`,
			}}>
			<div className='banner_contents'>
				<h1 className='banner_title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className='banner_button'>
					<button className='banner_button'>Play</button>
					<button className='banner_button'>My List</button>
				</div>
				<h1 className='banner_desc'>{truncate(movie.overview, 150)}</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
