import React from 'react'
import './MoviesImageContainer.scss'
import { getRatingColourClassNameByScore } from '../../utils/getRatingColourByScore'
import PosterErrorPlaceholder from '../../assets/noPosterFound.png'

export const MovieImageContainer = ({ className, rating, imageToRender, altText, renderRating }) => {

	const addPlaceHolderImage = (ev) => {
		ev.target.src = PosterErrorPlaceholder
	}

	return (
		<div className={className}>
			{renderRating &&
			<div className="tmdb-rating-tile">
				<div className={`tmdb-rating-container ${getRatingColourClassNameByScore(rating)}`}>
					<p>{rating}%</p>
				</div>
			</div>
			}
			<img src={imageToRender} alt={altText} onError={(ev) => addPlaceHolderImage(ev)} />
		</div>
	)
}
