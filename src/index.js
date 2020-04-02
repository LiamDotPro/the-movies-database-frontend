import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'

// Import or store before the application is rendered
import store from './redux/store'

// regenerator is required to add async functions without installing further presets.
import regeneratorRuntime from "regenerator-runtime";

// Import the flex grid css early
import 'flexboxgrid/dist/flexboxgrid.css'


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react-app')
)
