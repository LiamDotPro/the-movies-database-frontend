import React from 'react'
import './Home.scss'
import { LogoHeader } from '../../components/LogoHeader/LogoHeader'
import { LogoSearchArea } from '../../components/LogoSearchArea/LogoSearchArea'
import { MoviesGrid } from '../../components/MoviesGrid/MoviesGrid'

export class Home extends React.Component {

	componentDidMount () {
		this.props.requestMovieInfo(123)
	}

	render () {
		const { movies } = this.props

		return (
			<>
				<LogoHeader />
				<LogoSearchArea />
				<MoviesGrid />
			</>
		)
	}
}
