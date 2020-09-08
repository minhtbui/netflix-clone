import React, { useState, useEffect } from 'react';
import { reqType, yearRelease } from './requests';
import axios from './axios';
import Poster from './Poster';
import PosterInfo from './PosterInfo';
import RowButton from './RowButton';

function Row({ title, fetchURL, isLargePoster }) {
	const [movies, setMovies] = useState([]); // state for movies
	const [movieInfo, setMovieInfo] = useState(''); // state for movie
	const [trailerID, setTrailerID] = useState(''); // state for trailers
	const [isShow, setShow] = useState(false); // state for displaying moive info
	const [refs, setRefs] = useState('');

	//* update state after render DOM on a specific condition by snippet of code (fetch url)
	useEffect(() => {
		async function fetchData() {
			await axios
				.get(fetchURL)
				.then((request) => {
					setMovies(request.data.results);
				})
				.catch((error) => {
					console.log('Unable to Fetch Movie from TMDB', error);
				});
		}
		fetchData();
		//* if [], run once when the row loads, and don't run again
		//* if [fetchURL], useEffect Hook will keep rerendering to update
	}, [fetchURL]);

	// control CLICK on poster
	const handleClick = (movie) => {
		(isShow && movie?.title === movieInfo.title) ||
		(isShow && movie?.name === movieInfo.title)
			? setShow(false)
			: setShow(true);

		setTrailerID(''); // clear trailerID state
		// get trailer id API by matching type movie/tv series
		async function fetchVideo() {
			if (fetchURL.match('movie')) {
				const request = await axios.get(reqType('movie', movie.id));
				setTrailerID(request.data.results[0].key);
			} else if (fetchURL.match('tv')) {
				const request = await axios.get(reqType('tv', movie.id));
				setTrailerID(request.data.results[0]?.key);
			}
		}
		fetchVideo();
		getInfo(movie);
	};
	// set clicked movie data in state
	const getInfo = (movie) => {
		if (movie) {
			setMovieInfo(''); // clear MovieInfo state
			const desc = {
				title: movie?.title || movie?.name || '',
				year:
					yearRelease(movie.first_air_date) ||
					yearRelease(movie.release_date) ||
					'',
				desc: movie?.overview || '',
				poster: movie?.backdrop_path || '',
			};
			setMovieInfo(desc);
		}
	};

	return (
		<div className='row'>
			<h3 className='row_header'>{title}</h3>
			<div
				className='row_posters'
				ref={(el) => {
					setRefs(el);
				}}>
				{movies.map((movie) => (
					<Poster
						key={movie.id}
						fetchURL={fetchURL}
						isLargePoster={isLargePoster}
						movie={movie}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>

			<RowButton
				direction='left'
				onClick={() => (refs.scrollLeft -= refs.clientWidth / 1.05)}
			/>

			<RowButton
				direction='right'
				onClick={() => (refs.scrollLeft += refs.clientWidth / 1.05)}
			/>

			<div className='row_posters--info'>
				{isShow && (
					<PosterInfo
						title={movieInfo.title}
						year={movieInfo.year}
						desc={movieInfo.desc}
						creator='Minh Tu Bui 😎'
						backdrop={movieInfo.poster}
						trailerID={trailerID}
						isShow
					/>
				)}
			</div>
		</div>
	);
}

export default Row;
