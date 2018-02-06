/* IE Compatibility */

import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/fn/string/includes'

/* End IE Compatibility */

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Styling
import { RootContainer } from './AppStyles'
import { ThemeProvider } from 'styled-components'

//Sort of fallback / if theme is missing

import DefaultTheme from '../../theme/default'

class AppContainer extends Component {

	render() {
		let CustomTheme = this.props.theme
		let CustomStyles = this.props.style
		return (
			<Router>
				<ThemeProvider theme={CustomTheme ? CustomTheme : DefaultTheme} >
					<RootContainer style={CustomStyles ? CustomStyles : undefined}>
						{this.props.children}
					</RootContainer>
				</ThemeProvider>
			</Router>
		)
	}
}

export default AppContainer
