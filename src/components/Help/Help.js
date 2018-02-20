import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HelpDiv, Bold, HelpIcon, HelpButton } from './HelpStyles'
import { GetHelpID } from '../utils/HelpReducer'
import HelpPopup from './HelpPopUp'
import { GetHelpItem } from './HelpData'

class Help extends Component {
	constructor(props) {
		super(props)

		this.state = {
			openHelp: false,
			helpObj: null
		}
	}
	setHelpPopUpRef = (node) => {
		this.node = node
	}
	getHelpItem = (helpID) => {/* async  */
		 var data = GetHelpItem(helpID) // async/await the stuff / or make a Promise
		return data
	}


	getHelpData = (helpID) => {
		// api.get('/photos/8')
		// 	.then((response) => {
		// 		this.setState({ helpObj: response.data })
		// 	})
	}

	componentWillMount = () => { //Delete when the API is implemented, only used to used a prepared object to test.
		var data = this.getHelpItem(GetHelpID())
		this.setState({ helpObj: data })
	}

	onClickOutside = (e) => {
		if (this.state.openHelp) {
			if (this.node !== null && this.node !== undefined)
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
	//#region Rendering
	renderHelp = () => {

		return <HelpPopup
			small={this.props.small}
			helpID={GetHelpID()}
			innerRef={this.setHelpPopUpRef}
			helpObj={this.state.helpObj}
			openHelp={this.props.showHelp ? this.props.showHelp : this.state.openHelp}>
		</HelpPopup>

	}
	render() {
		const { small } = this.props
		return (
			small ? <React.Fragment>{this.renderHelp()}</React.Fragment>
				:
				<HelpDiv>
					<HelpButton onClick={this.openHelp}>
						<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
						{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
					</HelpButton>
					{this.renderHelp()}
				</HelpDiv>
		)
	}
	//#endregion
}

Help.propTypes = {
	helpLabel: PropTypes.string,
	small: PropTypes.bool
}

Help.defaultProps = {
	helpLabel: 'Need help?'
}

export default Help
