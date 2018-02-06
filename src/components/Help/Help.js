import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HelpDiv, Bold, HelpIcon, HelpButton, HelpPopUp } from './HelpStyles'
import { GetHelpID } from '../utils/HelpReducer'

class Help extends Component {
	constructor(props) {
		super(props)

		this.state = {
			openHelp: false
		}
	}
	setHelpPopUpRef = (node) => {
		this.node = node
	}

	renderHelp = () => {
		var helpID = GetHelpID()
		return <HelpPopUp innerRef={this.setHelpPopUpRef}>
			<h1>
				{helpID}
			</h1>
			<p>Description</p>
		</HelpPopUp>
	}
	onClickOutside = (e) => {
		if (this.state.openHelp) {
			if (!this.node.contains(e.target)) {
				this.setState({ openHelp: false })
				document.removeEventListener('click', this.onClickOutside, false)
			}
		}
	}
	openHelp = () => {
		document.addEventListener('click', this.onClickOutside, false)
		this.setState({ openHelp: !this.state.openHelp })
	}
	render() {
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton onClick={this.openHelp}>
					<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
				</HelpButton>
				{this.state.openHelp && this.renderHelp()}
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
