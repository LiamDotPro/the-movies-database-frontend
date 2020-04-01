import axios from 'axios';
import { setMovieInfo, setPopularMoviesList } from './actions';

export const requestPopularMoviesList = () => {
	return async function (dispatch) {
		const data = await axios.get('https://api.myjson.com/bins/19dtxc')
		console.log(data)
		dispatch(setPopularMoviesList(data));
	};
}

export const requestMovieInfo = () => {
	return async function (dispatch) {
		const data = await axios.get('https://api.myjson.com/bins/19dtxc')
		console.log(data)
		dispatch(setMovieInfo(data));
	};
}
