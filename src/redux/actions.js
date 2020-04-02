import { SET_MOVIE_SEARCH_RESULTS, SET_MOVIE_INFO, SET_POPULAR_MOVIES_LIST } from './actionTypes'

/**
 * Find movies information using an ID from the popular list
 * @param movies
 * @param query
 * @returns {{payload: {movies: *}, type: string}}
 */
export const setMovieSearchResults = (movies) => ({
	type: SET_MOVIE_SEARCH_RESULTS,
	payload: {
		movies,
	}
})

/**
 * Sets a movie found from the api into the selectedMovieState
 * @param movie
 * @returns {{payload: {movie: *}, type: string}}
 */
export const setMovieInfo = movie => ({
	type: SET_MOVIE_INFO,
	payload: {
		movie
	}
})

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
