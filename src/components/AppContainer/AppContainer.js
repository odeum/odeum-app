import React, { Component } from 'react'
import { AppDiv } from './AppStyles'
import { ThemeProvider } from "styled-components"
import theme from '../../theme/default'

class AppContainer extends Component {

	render() {
		return (
			<ThemeProvider theme={this.props.theme ? this.props.theme : theme} >
				<AppDiv>
					{this.props.children}
				</AppDiv>
			</ThemeProvider>
		)
	}
}

export default AppContainer
