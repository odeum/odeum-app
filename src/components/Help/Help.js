import React, { Component } from 'react'
import { HelpDiv, Bold, Icon, HelpButton } from './HelpStyles'

class Help extends Component {
	render() {		
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton>
					<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.label}</Bold> : null}
				</HelpButton>
			</HelpDiv>
		)
	}
}

Help.propTypes = {
	label: PropTypes.string,
	small: PropTypes.bool
}

Help.defaultProps = {
	label: 'Need help?'
}

export default Help
