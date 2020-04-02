import React from 'react'
import { ImageHeader } from '../../components/ImageHeader/ImageHeader'
import { MovieInformationPanel } from '../../components/MovieInformationPanel/MovieInformationPanel'
import { SubtleBorder } from '../../components/SublteBorder/SubtleBorder'
import { MovieInformationOverview } from '../../components/MovieInformationOverview/MovieInformationOverview'
import moment from 'moment'
import { routes } from '../../router'
import { Redirect } from 'react-router-dom'
import { tmdbImageUrlBasePath } from '../../redux/constants'
import { convertUserScoreToPercentage } from '../../utils/convertRating'
import { convertDuration } from '../../utils/convertDuration'

export class View extends React.Component {

	componentDidMount = async () => {

		// Return the user to the top of the page.
		window.scrollTo(0, 0)

		const {
			getSelectedMovieFromApi,
			selectedMovie,
			match
		} = this.props

		// If we don't currently have a selected movie.
		if (!selectedMovie) {
			await getSelectedMovieFromApi(match.params.id)
		}

		if (selectedMovie && selectedMovie.id.toString() !== match.params.id.toString()) {
			await getSelectedMovieFromApi(match.params.id)
		}
	}

	render () {

		const { selectedMovie } = this.props

		if (selectedMovie === null) {
			return null
		}

		if (!selectedMovie) {
			return <Redirect to={routes.home} />
		}

		return (
			<>
				<ImageHeader
					imageToRender={`${tmdbImageUrlBasePath}${selectedMovie['backdrop_path']}`}
					altText={selectedMovie.tagline}
				/>

				<MovieInformationPanel
					title={selectedMovie.title}
					date={moment(selectedMovie['release_date']).format('YYYY')}
					length={convertDuration(selectedMovie.runtime)}
					posterImageToRender={`${tmdbImageUrlBasePath}${selectedMovie['poster_path']}`}
					userScore={convertUserScoreToPercentage(selectedMovie['vote_average'])}
				/>

				<SubtleBorder />

				<MovieInformationOverview
					description={selectedMovie.overview} />
			</>
		)
	}

}
