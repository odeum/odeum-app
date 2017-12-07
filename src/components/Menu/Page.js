import React, { Component } from 'react'
import Menu from './Menu'
class Page extends Component {
	render() {
		return (
			<Menu {...this.props}>
				{this.props.children}
			</Menu>
		)
	}
}

export default Page 