import * as React from 'react';
import { Home } from '../views/home/Home';
import { connect } from 'react-redux';
import { getPopularMoviesState } from '../redux/selectors'
import { requestMovieInfo, requestPopularMoviesList } from '../redux/thunks';

const mapStateToProps = store => {
	return {
		movies: getPopularMoviesState(store)
	}
}

const mapDispatchToProps = dispatch => ({
	requestPopularMoviesList: () => dispatch(requestPopularMoviesList()),
	requestMovieInfo: id => dispatch(requestMovieInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
