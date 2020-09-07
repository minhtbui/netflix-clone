const API_key = '71352d53e38cc2585ffa8fd66e52929e';
export const img_url = 'https://image.tmdb.org/t/p/original/';

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

// react-youtube template for opts
export const opts = {
	height: '450',
	width: '700',
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 1, //enable auto play
		controls: 0,
		disablekb: 1, //disable keyboard controls
		iv_load_policy: 3, //disable annotation
		rel: 0, // show related videos same contents
		modestbranding: 1, //youtube logo
	},
};

export const settings = {
	dot: true,
	infinite: true,
	speed: 200,
	slidesToShow: 5,
	slidesToScroll: 5,
	className: 'row_posters',
	centerPadding: 0,
	lazyLoad: true,
};

export function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

export function yearRelease(str) {
	return str ? str.substr(0, 4) : str;
}
export default req;
