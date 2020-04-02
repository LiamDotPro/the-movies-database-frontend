import axios from 'axios';
import { setMovieInfo, setMovieSearchResults, setPopularMoviesList } from './actions'
import { tmdbApiKey } from './constants';

export const requestPopularMoviesList = () => {
	return async function (dispatch) {
		const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=1`)
		dispatch(setPopularMoviesList(response.data.results));
	};
}

export const requestMovieUsingId = id => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}&language=en-US`)
			dispatch(setMovieInfo(response.data));
		}
	} catch (e) {
	}
}

export const updateSearchQuery = query => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
			dispatch(setMovieSearchResults(response.data.results));
		};
	} catch (e) {
	}
}
