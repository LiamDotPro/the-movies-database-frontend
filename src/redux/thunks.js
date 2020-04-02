import axios from 'axios'
import { setMovieInfo, setMovieSearchResults, setPopularMoviesList } from './actions'
import { tmdbApiKey } from './constants'
import { routes as browserHistory } from '../router'

/**
 * Requests the movie database for popular movies
 * @returns {Function}
 */
export const requestPopularMoviesList = () => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=1`)
			dispatch(setPopularMoviesList(response.data.results))
		};
	} catch (e) {
		return async function (dispatch) {
			dispatch(setPopularMoviesList([]))
		};
	}
}

/**
 * Requests the movie database for a single movie's information
 * @param id
 * @returns {Function}
 */
export const requestMovieUsingId = id => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}&language=en-US`)
			dispatch(setMovieInfo(response.data))
			dispatch(setMovieSearchResults([]))
		}
	} catch (e) {
		browserHistory.navigate(browserHistory.home)
	}
}

/**
 * Requests the movie database for a collection of movies using a search string.
 * @param query
 * @returns {Function}
 */
export const updateSearchQuery = query => {
	try {
		return async function (dispatch) {
			const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
			dispatch(setMovieSearchResults(response.data.results))
		}
	} catch (e) {
		return async function (dispatch) {
			dispatch(setMovieSearchResults([]))
		}
	}
}
