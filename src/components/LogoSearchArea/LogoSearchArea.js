import glass from '../../assets/magnifying-glass.svg'
import React from 'react'
import '../LogoSearchArea/LogoSearchArea.scss'

export const LogoSearchArea = () => {
	return (
		<div className="row">
			<div className="col-xs-12 tmdb-search-input-container">
				<input type={`text`} placeholder={`Search`} />
				<div className="tmdb-search-icon">
					<img src={glass} />
				</div>
			</div>
		</div>
	)
}
