import React from 'react';
import Row from './Components/Row';
import req from './Components/requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import './css/App.scss';
import './css/Nav.scss';
import './css/Banner.scss';
import './css/Row.scss';
import './css/PosterInfo.scss';
import './css/RowButton.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Banner />

			{/* ROW CATEGORIES */}
			<Row title='Trending Now' fetchURL={req.fetchTrending} />

			<Row
				title='Netflix Originals'
				fetchURL={req.fetchNetflixOriginal}
				isLargePoster
			/>

			<Row title='Top Movies' fetchURL={req.fetchTopRatedMovies} />
			<Row title='Action Movies' fetchURL={req.fetchActionMovies} />
			<Row title='Commedy Movies' fetchURL={req.fetchCommedyMovies} />
			<Row title='Action Tv Shows' fetchURL={req.fetchActionTvShows} />
			<Row title='Commedy Tv Shows' fetchURL={req.fetchCommedyTvShows} />
		</div>
	);
}

export default App;
