import axios from 'axios';

// create request database from API
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
