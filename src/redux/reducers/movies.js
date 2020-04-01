import { SET_POPULAR_MOVIES_LIST, SET_MOVIE_INFO } from '../actionTypes'

const initialState = {
	popularMovies: ['harry', 'tom'],
	selectedMovie: null
};

export default function (state = initialState, action) {
	console.log(action.type, action.payload)
	switch (action.type) {

		case SET_POPULAR_MOVIES_LIST: {
			return {
				...state
			}
		}

		case SET_MOVIE_INFO: {
			return {
				...state
			}
		}

		default:
			return state;
	}
}
