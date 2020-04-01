import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'

// Import or store before the application is rendered
import store from './redux/store'

import regeneratorRuntime from "regenerator-runtime";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react-app')
)
