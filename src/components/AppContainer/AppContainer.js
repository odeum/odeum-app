/* IE Compatibility */

import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/fn/string/includes'

/* End IE Compatibility */

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppDiv } from './AppStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme/default'

class AppContainer extends Component {

	render() {
		return (
			<Router>
				<ThemeProvider theme={this.props.theme ? this.props.theme : theme} >
					<AppDiv style={this.props.style ? this.props.style : undefined}>
						{this.props.children}
					</AppDiv>
				</ThemeProvider>
			</Router>
		)
	}
}

export default AppContainer
