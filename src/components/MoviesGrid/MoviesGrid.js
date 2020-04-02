import React from 'react'
import './MoviesGrid.scss'
import { MovieTile } from '../MovieTile/MovieTile'
import { convertUserScoreToPercentage } from '../../utils/convertRating'
import moment from 'moment'
import { tmdbImageUrlBasePath } from '../../redux/constants'
import PropTypes from 'prop-types'

export const MoviesGrid = ({ movies, pageTitle }) => {
	return (
		<>
			<div className="row">
				<div className="col-xs tmdb-movies-header">
					<h1>{pageTitle}</h1>
				</div>
			</div>
			<div className="row">
				{movies && movies.map((el, i) =>
					<MovieTile
						key={`movie-tile-${i}`}
						rating={convertUserScoreToPercentage(el['vote_average'] ? el['vote_average']: 0)}
						title={el.title}
						date={moment(el['release_date']).format('MMMM YYYY')}
						uid={el.id}
						altText={el.title}
						imageToRender={`${tmdbImageUrlBasePath}${el['poster_path']}`}
						evenOrOddIdentifier={!!i ? 'even' : 'odd'}
					/>)
				}
				{!movies &&
				<div>Loading..</div>
				}

			</div>
		</>
	)
}

MoviesGrid.propTypes = {
	movies: PropTypes.object,
	pageTitle: PropTypes.string
}
