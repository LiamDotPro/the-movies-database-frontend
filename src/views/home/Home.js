import React from 'react'
import { LogoHeader } from '../../components/LogoHeader/LogoHeader'
import { LogoSearchArea } from '../../components/LogoSearchArea/LogoSearchArea'
import { MoviesGrid } from '../../components/MoviesGrid/MoviesGrid'

export class Home extends React.Component {

	componentDidMount = async () => {
		await this.props.requestPopularMoviesList()
	}

	render () {
		const { movies } = this.props

		if (!movies) {
			return null
		}

		return (
			<>
				<LogoHeader />
				<LogoSearchArea />
				<MoviesGrid movies={movies} />
			</>
		)
	}
}
