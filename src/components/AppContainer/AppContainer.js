import React, { Component } from 'react'
import { AppDiv } from './AppStyles'

class AppContainer extends Component {

	render() {
		return (
			<AppDiv>
				{this.props.children}
			</AppDiv>
		)
	}
}

export default AppContainer
