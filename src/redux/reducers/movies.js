import { SET_MOVIE_INFO, SET_MOVIE_SEARCH_RESULTS, SET_POPULAR_MOVIES_LIST } from '../actionTypes'

const initialState = {
	popularMovies: null,
	selectedMovie: null
};

export default function (state = initialState, action) {
	console.log(action.type, action.payload)
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
