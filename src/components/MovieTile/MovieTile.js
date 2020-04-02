import React from 'react'
import { MovieImageContainer } from '../MovieImageContainer/MoviesImageContainer'
import { Link } from 'react-router-dom'
import { routes } from '../../router'
import './MovieTile.scss'

export const MovieTile = ({ title, date, rating, uid, evenOrOddIdentifier, imageToRender, altText }) => {

	return (
		<div className={`col-xs-6 col-sm-3 col-lg-2 tmdb-tile tmdb-tile-${evenOrOddIdentifier}`}>
			<Link to={routes.view.navigate(uid)}>
				<MovieImageContainer
					rating={rating}
					className={'tmdb-tile-inner'}
					imageToRender={imageToRender}
					renderRating={true}
					altText={altText}
				/>

				<div className="tmdb-tile-titles">
					<h2>{title}</h2>
					<h3>{date}</h3>
				</div>
			</Link>
		</div>
	)
}
