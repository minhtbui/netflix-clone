const API_key = '71352d53e38cc2585ffa8fd66e52929e';

const req = {
	fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
	fetchNetflixOriginal: `/discover/tv?api_key=${API_key}&with_networks=213`,
	fetchPopularMovies: `/discover/movie?api_key=${API_key}&sort_by=popularity.desc`,
	fetchPopularTvShows: `/discover/tv?api_key=${API_key}&sort_by=popularity.desc`,
	fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28.desc`,
	fetchCommedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35.desc`,
	fetchActionTvShows: `/discover/tv?api_key=${API_key}&with_genres=28.desc`,
	fetchCommedyTvShows: `/discover/tv?api_key=${API_key}&with_genres=35.desc`,
};

export default req;
