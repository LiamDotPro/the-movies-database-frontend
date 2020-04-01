import { SET_MOVIE_INFO, SET_POPULAR_MOVIES_LIST } from './actionTypes'

/**
 * Request's movie information using and ID
 * @param id
 * @returns {{payload: {id: string}, type: string}}
 */
export const setMovieInfo = id => ({
	type: SET_MOVIE_INFO,
	payload: {
		id: id
	}
});

/**
 * This action requests the TMDB endpoint for the popular movie list.
 * @returns {{payload: {}, type: string}}
 */
export const setPopularMoviesList = (movies) => ({
	type: SET_POPULAR_MOVIES_LIST,
	payload: {
		movies
	}
});
