import React from 'react'
import './MoviesGrid.scss'
import { MovieTile } from '../MovieTile/MovieTile'
import { convertUserScoreToPercentage } from '../../utils/convertRating'
import moment from 'moment'
import { tmdbImageUrlBasePath } from '../../redux/constants'

export const MoviesGrid = ({ movies }) => {
	return (
		<>
			<div className="row">
				<div className="col-xs tmdb-movies-header">
					<h1>Popular Movies</h1>
				</div>
			</div>
			<div className="row">
				{movies && movies.map((el, i) =>
					<MovieTile
						key={`movie-tile-${i}`}
						rating={convertUserScoreToPercentage(el['vote_average'])}
						title={el.title}
						date={moment(el['release_date']).format('MMMM YYYY')}
						uid={el.id}
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

