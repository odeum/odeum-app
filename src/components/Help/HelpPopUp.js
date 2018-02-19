import React, { PureComponent } from 'react'
// import { GetHelpID } from '../utils/HelpReducer'
import {
	HelpPopUp, transitionStyles, HelpPopUpTitleText,
	VerticalDivider, HorizontalDivider,
	DescriptionDivStyle, HelpComponentItem, Title
} from './HelpStyles'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

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
		const { helpObj } = this.props

		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				return <HelpPopUp style={{ ...transitionStyles[state] }} small={this.props.small} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<HelpComponent
						orientation='column'
						titleText='Frequently Asked Questions'
						alignment='left'
						help_title={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description={helpObj ? helpObj.locale_content['en'].help_description : "Loading..."}
						help_title2={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description2={"Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id.Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id."}>
					</HelpComponent>
					<HelpComponent
						orientation='row'
						titleText='Are you still missing answers?'
						alignment='center'
						help_title="More answers"
						help_description={"See the rest of the FAQ"}
						help_title2={"Contact Odeum support"}
						help_description2={"Number: 88 88 88 88\nEmail: support@odeum.dk"}
						link={'/i-have-help/'}>
					</HelpComponent>
				</HelpPopUp>
			}}
		</Transition>
	}
}

const HelpComponent = (props) => {
	return (
		<React.Fragment>
			<HelpPopUpTitleText>{props.titleText}</HelpPopUpTitleText>
			<DescriptionDivStyle orientation={props.orientation} alignment={props.alignment}>
				<HelpComponentItem orientation={props.orientation}>
					<Title>{props.help_title}</Title>
					{props.help_description}
				</HelpComponentItem>
				{props.orientation === 'row' ? <VerticalDivider /> : <HorizontalDivider />}
				<HelpComponentItem orientation={props.orientation}>
					<Title>{props.help_title2}</Title>
					{props.link ? <Link to={props.link}>{props.help_description2}</Link> : props.help_description2}
				</HelpComponentItem>
			</DescriptionDivStyle>
		</React.Fragment>
	)
}