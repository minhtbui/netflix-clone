import React, { useState, useEffect } from 'react';
import axios from './axios';
import { img_url } from './requests';
import './Row.css';

function Row({ title, fetchURL, isLargePoster }) {
	const [movies, setMovies] = useState([]);

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

	return (
		<div className='row'>
			<h3>{title}</h3>
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
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
