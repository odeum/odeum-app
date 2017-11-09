import React, { Component } from 'react'
import { WorkspaceDiv } from './WorkspaceStyles'

class Workspace extends Component {

	componentWillMount() {
		if (this.props.helpID)
		 this.props.SetHelpID(this.props.helpID)
	}
	
	render() {
		return (
			<WorkspaceDiv style={this.props.style}>
				{this.props.children}
			</WorkspaceDiv>
		)
	}
}

export default Workspace