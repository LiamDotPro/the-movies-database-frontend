import React from 'react'
import { useParams } from 'react-router-dom'
import './View.scss'

export const MovieDetails = () => {

	let { id } = useParams();

	return (
		<div>
			Movie Details {id}
		</div>
	)
}
