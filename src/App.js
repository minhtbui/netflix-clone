import React from 'react';
import './App.css';
import Row from './Row';
import req from './requests';

function App() {
	return (
		<div className='App'>
			<h1>Netflix</h1>
			<Row title='Trending Now' fetchURL={req.fetchTrending} />

			<Row title='NETFLIX ORIGINAL' fetchURL={req.fetchNetflixOriginal} />
		</div>
	);
}

export default App;
