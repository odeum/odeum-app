import React, { Component } from 'react'
import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp } from './HelpStyles'

export default class HelpPopup extends Component {
	componentWillUpdate = (nextProps, nextState) => {
		// if (nextProps.openHelp === true)
		// document.addEventListener('click', this.onClickOutsise, false)
		// else
		// document.removeEventListener('click', this.onClickOutsise, false)
	}

	componentWillUnmount = () => {
		// document.removeEventListener('click', this.onClickOutsise, false)
	}

	onClickOutsise = (e) => {
		e.stopPropagation()
		// console.log('Clicked Outside')
		// console.log(e.target)
		if (this.props.openHelp) {
			if (this.node) {
				if (!this.node.contains(e.target)) {
					// this.setState({ openHelp: false })
					this.props.handleHelp()
					document.removeEventListener('click', this.onClickOutsise, false)
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
