import glass from '../../assets/magnifying-glass.svg'
import React from 'react'
import '../LogoSearchArea/LogoSearchArea.scss'
import * as _ from 'lodash'
import PropTypes from 'prop-types'

export const LogoSearchArea = ({ updateSearchQuery, setMovieSearchResults }) => {

	const search = _.debounce((e) => {

		if (!e.target.value) {
			setMovieSearchResults()
		}

		updateSearchQuery(e.target.value)
	}, 1000)

	return (
		<div className="row">
			<div className="col-xs-12 tmdb-search-input-container">
				<input type={`text`} onChange={(e) => {
					// Persist required to hold synthetic event.
					e.persist()
					search(e)
				}} placeholder={`Search`} />
				<div className="tmdb-search-icon">
					<img src={glass} alt="search icon" />
				</div>
			</div>
		</div>
	)
}

LogoSearchArea.propTypes = {
	updateSearchQuery: PropTypes.func,
	setMovieSearchResults: PropTypes.func
}
