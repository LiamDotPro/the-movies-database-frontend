import * as React from 'react'
import { Home } from '../views/home/Home'
import { connect } from 'react-redux'
import { getMovieSearchResults, getPopularMoviesState } from '../redux/selectors'
import { requestPopularMoviesList, updateSearchQuery } from '../redux/thunks'
import { setMovieSearchResults } from '../redux/actions'

const mapStateToProps = store => {
	return {
		movies: getPopularMoviesState(store),
		movieSearchResults: getMovieSearchResults(store)
	}
}

const mapDispatchToProps = dispatch => ({
	requestPopularMoviesList: () => dispatch(requestPopularMoviesList()),
	updateSearchQuery: (query) => dispatch(updateSearchQuery(query)),
	setMovieSearchResults: () => dispatch(setMovieSearchResults([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
