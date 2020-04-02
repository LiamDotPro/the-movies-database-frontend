import logo from '../../assets/logo.png'
import React from 'react'
import '../LogoHeader/LogoHeader.scss'

export const LogoHeader = () => {
	return (
		<div className="row">
			<div className="col-xs-12">
				<div className="tmdb-logo-container">
					<img src={logo} alt={`The Movie DB`} className="tmdb-logo" />
					<div className="tmdb-fractiles" />
				</div>
			</div>
		</div>
	)
}
