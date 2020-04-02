import React from 'react'
import { LogoHeader } from '../../components/LogoHeader/LogoHeader'
import { LogoSearchArea } from '../../components/LogoSearchArea/LogoSearchArea'
import { MoviesGrid } from '../../components/MoviesGrid/MoviesGrid'

export class Home extends React.Component {

	componentDidMount = async () => {
		await this.props.requestPopularMoviesList()
	}

	render () {
		const { movies, updateSearchQuery, setMovieSearchResults, movieSearchResults } = this.props

		if (!movies) {
			return null
		}

		return (
			<>
				<LogoHeader />
				<LogoSearchArea
					updateSearchQuery={updateSearchQuery}
					setMovieSearchResults={setMovieSearchResults}
				/>
				<MoviesGrid
					pageTitle={!movieSearchResults.length ? 'Popular Movies' : 'Search Results'}
					movies={!movieSearchResults.length ? movies : movieSearchResults} />
			</>
		)
	}
}
