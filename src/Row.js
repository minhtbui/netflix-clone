import React, { useState, useEffect } from 'react';
import axios from './axios';
import { img_url, reqType } from './requests';
import YouTube from 'react-youtube';

function Row({ title, fetchURL, isLargePoster }) {
	const [movies, setMovies] = useState([]); // state for movies
	const [trailerID, setTrailerID] = useState(''); // state for trailers

	//* update state after render DOM on a specific condition by snippet of code (fetch url)
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
		//* if [], run once when the row loads, and don't run again
		//* if [fetchURL], useEffect Hook will keep rerendering to update
	}, [fetchURL]);

	const handleClick = (movie) => {
		if (trailerID) {
			setTrailerID('');
		} else {
			async function fetchVideo() {
				if (fetchURL.match('movie')) {
					const request = await axios.get(reqType('movie', movie.id));
					setTrailerID(request.data.results[0].key);
				} else if (fetchURL.match('tv')) {
					const request = await axios.get(reqType('tv', movie.id));
					setTrailerID(request.data.results[0].key);
				}
			}
			fetchVideo();
		}
	};

	// react-youtube template for opts
	const opts = {
		height: '340',
		width: '60%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1, //enable auto play
			controls: 0,
			disablekb: 1, //disable keyboard controls
			iv_load_policy: 3, //disable annotation
			rel: 0, // disable related videos
			modestbranding: 1, //youtube logo
		},
	};

	return (
		<div className='row'>
			<h3 className='row_header'>{title}</h3>
			<div className='row_posters'>
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`poster ${isLargePoster && 'large_poster'}`}
						src={`${img_url}${
							isLargePoster
								? movie.poster_path
								: movie?.backdrop_path || movie?.poster_path
						}`}
						alt={movie.title}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>

			{trailerID && (
				<YouTube videoId={trailerID} opts={opts} className='poster_info' />
			)}
		</div>
	);
}

export default Row;
