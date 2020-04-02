import { getSelectedMovieState } from '../redux/selectors'
import { requestMovieUsingId } from '../redux/thunks'
import { connect } from 'react-redux'
import { View } from '../views/view/View'

const mapStateToProps = store => ({
	selectedMovie: getSelectedMovieState(store)
})

const mapDispatchToProps = dispatch => ({
	getSelectedMovieFromApi: id => dispatch(requestMovieUsingId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
