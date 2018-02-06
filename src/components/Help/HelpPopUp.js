import React, { PureComponent } from 'react'
import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp } from './HelpStyles'

export default class HelpPopup extends PureComponent {

	onClickOutside = (e) => {
		e.stopPropagation()
		if (this.props.openHelp) {
			if (this.node) {
				if (!this.node.contains(e.target)) {
					this.props.handleHelp()
					document.removeEventListener('click', this.onClickOutside, false)
				}
			}
		}
	}
	setHelpPopUpRef = (node) => {
		this.node = node
	}
	render() {
		const helpID = GetHelpID()
		return this.props.openHelp ?
			<HelpPopUp innerRef={this.setHelpPopUpRef}>
				<h1>
					{helpID}
				</h1>
				<p>Description</p>
			</HelpPopUp>
			: null


	}
}
