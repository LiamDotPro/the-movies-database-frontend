import { SET_MOVIE_INFO, SET_MOVIE_SEARCH_RESULTS, SET_POPULAR_MOVIES_LIST } from '../actionTypes'

const initialState = {
	popularMovies: null,
	selectedMovie: null,
	movieSearchResults: [],
};

export default function (state = initialState, action) {
	switch (action.type) {

		case SET_POPULAR_MOVIES_LIST: {
			return {
				...state,
				popularMovies: [...action.payload.movies]
			}
		}

		case SET_MOVIE_SEARCH_RESULTS: {
			return {
				...state,
				movieSearchResults: action.payload.movies
			}
		}

		case SET_MOVIE_INFO: {
			return {
				...state,
				selectedMovie: action.payload.movie
			}
		}

		default:
			return state;
	}
}
