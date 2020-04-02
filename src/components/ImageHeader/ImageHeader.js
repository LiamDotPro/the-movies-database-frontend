import React from 'react'
import './ImageHeader.scss'
import backArrow from '../../assets/backArrow.svg'
import { routes } from '../../router'
import { Link } from 'react-router-dom'
import NoBannerPlaceholder from '../../assets/noBanner.png'
import PropTypes from 'prop-types'

export const ImageHeader = ({ imageToRender, altText }) => {

	const addPlaceHolderImage = (ev) => {
		ev.target.src = NoBannerPlaceholder
	}

	return (
		<div className="row tmdb-image-header-container">
			<div className="tmdb-image-header">
				<div className="tmdb-back-arrow">
					<Link to={routes.home}>
						<img src={backArrow} alt={'go back'} />
					</Link>
				</div>
				<img src={imageToRender} alt={altText} onError={(ev) => addPlaceHolderImage(ev)} />
			</div>
		</div>
	)

}

ImageHeader.propTypes = {
	imageToRender: PropTypes.string,
	altText: PropTypes.string
}
