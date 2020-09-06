import React, { useState, useEffect } from 'react';
import axios from './axios';
import { img_url } from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchURL, isLargePoster }) {
	const [movies, setMovies] = useState([]); // state for movies
	const [trailerID, setTrailerUrl] = useState(''); // state for trailers

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

	// handle click on movie poster
	const handleClick = (movie) => {
		if (trailerID) {
			setTrailerUrl('');
		} else {
			//* movieTrailer module from npm packet search on Youtube by the name of poster
			//* if not found, return empty as ''
			movieTrailer(
				movie?.title ||
					movie?.original_title ||
					movie?.name ||
					movie?.original_name ||
					'',
			)
				.then((url) => {
					//* URLSearchParams - Returns an array of key, value pairs for every entry in the search params.
					// https://www.youtube.com/watch?v=ewDSeyWve8M
					const trailerID = new URLSearchParams(new URL(url).search);
					setTrailerUrl(trailerID.get('v'));
				})
				.catch((error) => console.log(error));
		}
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
