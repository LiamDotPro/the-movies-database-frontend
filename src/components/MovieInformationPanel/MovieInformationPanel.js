import React from 'react'
import './MovieInformationPanel.scss'
import { MovieImageContainer } from '../MovieImageContainer/MoviesImageContainer'
import PropTypes from 'prop-types'

export const MovieInformationPanel = ({ title, userScore, date, length, posterImageToRender }) => {
	return (
		<div className="row">
			<div className="col-xs-6 col-sm-2">
				<MovieImageContainer
					className={'tmdb-tile-inner tmdb-tile-inner-view'}
					imageToRender={posterImageToRender}
					renderRating={false}
					altText={'Avengers Infinity War'}
				/>
			</div>

			<div className="col-xs-6">
				<div className="tmdb-movie-info-header">
					<h1>{title}</h1>
				</div>
				<div className="tmdb-movie-info-date-and-score">
					<h3>{`${date} • ${userScore}% user score`}</h3>
				</div>
				<div className="tmdb-movie-info-length">
					<h3>{length}</h3>
				</div>
			</div>
		</div>
	)
}

MovieInformationPanel.propTypes = {
	title: PropTypes.string,
	userScore: PropTypes.string,
	date: PropTypes.string,
	length: PropTypes.string,
	posterImageToRender: PropTypes.string
}
