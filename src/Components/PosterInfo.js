import React from 'react';
import YouTube from 'react-youtube';
import { opts, img_url } from './requests';

const PosterInfo = ({ title, year, desc, creator, backdrop, trailerID }) => (
	<div
		className='poster_info'
		style={{
			backgroundImage: ` radial-gradient(circle, 
				rgba(0,0,0,0) 0%, 
				rgba(0,0,0,0.75) 0%, 
				rgba(0,0,0,0.90) 80%),
				url(${img_url}${backdrop})`,
		}}>
		<div className='poster_content'>
			<ul>
				<li className='poster_content--name'>{title}</li>
				<li className='poster_content--year'>{year}</li>
				<li className='poster_content--desc'>{desc}</li>
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
				<li className='poster_content--creator'>Creator: {creator}</li>
			</ul>
		</div>
		{trailerID && (
			<YouTube
				videoId={trailerID}
				opts={opts}
				containerClassName='poster_videos'
			/>
		)}
	</div>
);

export default PosterInfo;
