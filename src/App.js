import React from 'react';
import Row from './Row';
import req from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './css/App.css';
import './css/Nav.css';
import './css/Banner.css';
import './css/Row.css';

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
