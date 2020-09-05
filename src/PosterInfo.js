import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { opts } from './requests';

const PosterInfo = ({ trailerID }) => (
	<div className='poster_info'>
		{/* <div className='poster_desc'>{movieDesc.name}</div> */}
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
