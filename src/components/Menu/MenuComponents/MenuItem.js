import React, { PureComponent } from 'react'
import { IconDiv, ArrowIconDiv, Link, MenuText } from '../MenuStyles'
import PropTypes from 'prop-types'
import { Icon } from 'odeum-ui'
import { SetHelpID } from '../../utils/HelpReducer'

class MenuItem extends PureComponent {

	cutRoutes = (string) => {
		var match = string.match(/(\/\S*\/)|(\/\S*$)/i)
		return match ? match[0] : null
	}
	componentWillMount() {
		this.setHelpID()
		if (this.cutRoutes(window.location.pathname) === this.cutRoutes(this.props.route)) {
			this.activate()
		}
	}
	setHelpID = () => {
		if (this.props.helpID) {
			SetHelpID(this.props.helpID)
		}
	}
	activate = () => {
		this.props.onClick(this.props.MenuID)
	}
	render() {
		const { arrow } = this.props
		return (
			<Link title={this.props.label} to={this.props.route} achordeon={this.props.achordeon} onClick={this.activate} activemenu={this.props.active.toString()}>
				<IconDiv><Icon color={'white'} iconSize={18} icon={this.props.icon ? this.props.icon : this.defaultProps.icon} style={{ marginRight: '0px' }} /></IconDiv>
				<MenuText>
					{this.props.label}
				</MenuText>
				{arrow !== false ? <ArrowIconDiv ><Icon icon={'keyboard_arrow_right'} iconSize={25} color={'white'} style={{ marginRight: '0px' }} /></ArrowIconDiv> : null}
			</Link>
		)
	}
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	icon: PropTypes.string

}
MenuItem.defaultProps = {
	icon: 'menu'
}
export default MenuItem