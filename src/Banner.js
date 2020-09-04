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

	function yearRelease(str) {
		return str ? str.substr(0, 4) : str;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundImage: `
					radial-gradient(
						circle,
						rgba(0, 0, 0, 0) 50%,
						rgba(0, 0, 0, 0.5) 70%,
						rgba(0, 0, 0, 1) 90%
					), 
					url(${img_url}${movie.backdrop_path})`,
			}}>
			<div className='banner_contents'>
				<h1 className='banner_title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<h3>{yearRelease(movie.first_air_date)}</h3>
				<p className='banner_desc'>{truncate(movie.overview, 150)}</p>
				<div className='banner_buttons'>
					<button className='banner_button'>
						<i className='fab fa-google-play'></i> Play
					</button>
					<button className='banner_button'>
						<i className='fas fa-plus'></i> My List
					</button>
					<div className='banner_thump'>
						<i className='far fa-thumbs-up'></i>
						<i className='far fa-thumbs-down'></i>
					</div>
				</div>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
