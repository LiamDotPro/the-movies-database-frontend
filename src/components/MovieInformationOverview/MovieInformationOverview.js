import React from 'react'
import './MovieInformationOverview.scss'

export const MovieInformationOverview = ({ description }) => {
	return (
		<div className="row">
			<div className="col-xs">
				<div className="tmdb-overview-header">
					<h1>Overview</h1>
				</div>
				<div className="tmdb-overview-description">
					<h2>{description}</h2>
				</div>
			</div>
		</div>
	)
}
