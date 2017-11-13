import React, { Component } from 'react'
import { IconDiv, ArrowIconDiv, Link, MenuText } from '../MenuStyles'
import PropTypes from 'prop-types'
import { Icon } from 'odeum-ui'

class MenuItem extends Component {
	static defaultProps = {
		icon: 'menu'
	}
	cutRoutes = (string) => {
		var match = string.match(/\/\S*\//i)
		return match ? match[0] : null
	}
	componentWillMount() {
		if (this.props.helpID && this.props.active)
			this.props.SetHelpID(this.props.helpID)
		if (this.cutRoutes(window.location.pathname) === this.cutRoutes(this.props.route))
			this.activate()
	}
	activate = () => {
		this.props.onClick(this.props.MenuID ? this.props.MenuID : 0)
	}
	render() {
		return (
			<Link title={this.props.label} to={this.props.route} achordeon={this.props.achordeon} onClick={this.activate} activemenu={this.props.active.toString()}>
				<IconDiv><Icon color={'white'} iconSize={18} icon={this.props.icon ? this.props.icon : this.defaultProps.icon} style={{ marginRight: '0px' }} /></IconDiv>
				<MenuText>
					{this.props.label}
				</MenuText>
				<ArrowIconDiv ><Icon icon={'keyboard_arrow_right'} iconSize={25} color={'white'} style={{ marginRight: '0px' }} /></ArrowIconDiv>
			</Link>
		)
	}
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	icon: PropTypes.string

}

export default MenuItem