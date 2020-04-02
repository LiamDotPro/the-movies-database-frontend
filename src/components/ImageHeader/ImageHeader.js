import React from 'react'
import './ImageHeader.scss'
import backArrow from '../../assets/backArrow.svg'
import { routes } from '../../router'
import { Link } from 'react-router-dom'

export const ImageHeader = ({ imageToRender, altText }) => {

	return (
		<div className="row tmdb-image-header-container">
			<div className="tmdb-image-header">
				<div className="tmdb-back-arrow">
					<Link to={routes.home}>
						<img src={backArrow} alt={'go back'} />
					</Link>
				</div>
				<img src={imageToRender} alt={altText} />
			</div>
		</div>
	)

}
