import React, { useState, useEffect } from 'react';
import baseURL from './axios';

const img_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	//* update state after render DOM on a specific condition by snippet of code (fetch url)
	useEffect(() => {
		async function fetchData() {
			const request = await baseURL.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
		//* if [], run once when the row loads, and don't run again
		//* if [fetchURL], useEffect Hook will keep rerendering to update
	}, [fetchURL]);

	return (
		<div className='row'>
			<h2>{title}</h2>

			<div className='row-posters'>
				{movies.map((movie) => (
					<img
						src={img_url + movie.backdrop_path}
						alt={movie.title}
						height='100px'
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
