import React from 'react'
import { ApplicationRouter } from './router'
import './App.scss'

export const App = () => {
	return (
		<div className={`container-fluid`}>
			<ApplicationRouter />
		</div>
		)
}
