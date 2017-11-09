import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import App from '../../App'

import React, { Component } from 'react'

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={App} />
				</div>
			</Router>
		)
	}
}

export default AppRouter