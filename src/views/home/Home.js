import React from 'react';
import './Home.scss'

export class Home extends React.Component {

	componentDidMount () {
		this.props.requestMovieInfo(123)
	}

	render () {
		const { movies } = this.props

		return (
			<div>
				{movies.map(el => <p>{el}</p>)}
			</div>
		)
	}
}
