import axios from 'axios';
import { setMovieInfo, setPopularMoviesList } from './actions';

export const requestPopularMoviesList = () => {
	return async function (dispatch) {
		const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&page=1')
		dispatch(setPopularMoviesList(response.data.results));
	};
}

export const requestMovieUsingId = id => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`)
			dispatch(setMovieInfo(response.data));
		};
	} catch (e) {
	}
}
