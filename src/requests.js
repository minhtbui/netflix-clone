const API_key = '71352d53e38cc2585ffa8fd66e52929e';

const req = {
	fetchTrending: `/trending/movie/week?api_key=${API_key}&language=en-US`,
	fetchNetflixOriginal: `/discover/tv?api_key=${API_key}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&region=VN`,
	fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
	fetchCommedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
	fetchActionTvShows: `/discover/tv?api_key=${API_key}&with_genres=28`,
	fetchCommedyTvShows: `/discover/tv?api_key=${API_key}&with_genres=35`,
	fetchTrendingWeek: `/trending/tv/week?api_key=${API_key}`,
};

export const reqType = (type, id) => {
	const req =
		type === 'movie'
			? `/movie/${id}/videos?api_key=${API_key}`
			: `/tv/${id}/videos?api_key=${API_key}` || '';
	return req;
};

export const img_url = 'https://image.tmdb.org/t/p/original/';
export default req;
