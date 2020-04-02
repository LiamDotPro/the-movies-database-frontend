import React from 'react'
import { MovieImageContainer } from '../MovieImageContainer/MoviesImageContainer'
import { Link } from 'react-router-dom'
import { routes } from '../../router'
import './MovieTile.scss'

export const MovieTile = ({ title, date, rating, uid, evenOrOddIdentifier, imageToRender }) => {

	return (
		<div className={`col-xs-6 col-sm-3 col-lg-2 tmdb-tile tmdb-tile-${evenOrOddIdentifier}`}>
			<MovieImageContainer
				rating={rating}
				className={'tmdb-tile-inner'}
				imageToRender={imageToRender}
				altText={'Avengers Infinity War'}
			/>
			<Link to={routes.view.navigate(uid)}>
				<div className="tmdb-tile-titles">
					<h2>{title}</h2>
					<h3>{date}</h3>
				</div>
			</Link>
		</div>
	)
}
