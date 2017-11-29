import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HelpDiv, Bold, HelpIcon, HelpButton } from './HelpStyles'

class Help extends Component {
	render() {		
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton>
					<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
				</HelpButton>
			</HelpDiv>
		)
	}
}

Help.propTypes = {
	helpLabel: PropTypes.string,
	small: PropTypes.bool
}

Help.defaultProps = {
	helpLabel: 'Need help?'
}

export default Help
