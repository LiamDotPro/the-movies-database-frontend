import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewContainer from './containers/ViewContainer'
import HomeContainer from './containers/HomeContainer';

// Statically type our routes, this allows us to use them dynamically in the future
export const routes = {
	root: '',
	home: '/home',
	view: {
		navigate: (id) => `/view/${id}`,
		path: '/view/:id'
	}
}

export const ApplicationRouter = () => {
	return (
		<Router>
			<div className={`router`}>
				<Switch>
					<Route path={routes.home} component={HomeContainer} />
					<Route path={routes.view.path} component={ViewContainer} />
					<Route path={routes.root} component={HomeContainer} />
				</Switch>
			</div>
		</Router>
	)
}
