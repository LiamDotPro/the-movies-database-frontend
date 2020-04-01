import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { MovieDetails } from './views/view/View'
import HomeContainer from './containers/HomeContainer';

// Expose the history so we can use it programmatically
export const browserHistory = createBrowserHistory()

// Statically type our routes, this allows us to use them dynamically in the future
export const routes = {
	root: '',
	home: '/home',
	view: '/view/:id'
}

export const ApplicationRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path={routes.home} component={HomeContainer} />
					<Route path={routes.view} component={MovieDetails} />
					<Route path={routes.root} component={HomeContainer} />
				</Switch>
			</div>
		</Router>
	)
}
