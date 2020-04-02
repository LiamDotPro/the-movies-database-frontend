import React from 'react'
import './MoviesImageContainer.scss'
import { getRatingColourClassNameByScore } from '../../utils/getRatingColourByScore';

export const MovieImageContainer = ({ className, rating, imageToRender, altText }) => {
	return (
		<div className={className}>
			{rating &&
			<div className="tmdb-rating-tile">
				<div className={`tmdb-rating-container ${getRatingColourClassNameByScore(rating)}`}>
					<p>{rating}%</p>
				</div>
			</div>
			}
			<img src={imageToRender} alt={altText} />
		</div>
	)
}
