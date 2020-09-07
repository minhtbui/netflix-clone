import React from 'react';
import { img_url } from './requests';

function Poster({ isLargePoster, movie, onClick, index, activeIndex }) {
	console.log(index, activeIndex);
	return (
		<div
			className={`poster ${(isLargePoster && 'poster--large') || ''} ${
				index !== activeIndex ? 'inActive' : 'Active'
			}`}>
			<img
				key={movie.id}
				src={`${img_url}${
					isLargePoster
						? movie.poster_path
						: movie?.backdrop_path || movie?.poster_path
				}`}
				alt={movie.title}
			/>
			<span onClick={onClick}></span>
		</div>
	);
}

export default Poster;
