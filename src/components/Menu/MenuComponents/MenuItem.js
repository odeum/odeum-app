import React, { Component } from 'react'
import { IconDiv, ArrowIconDiv, Link, MenuText } from '../MenuStyles'
import PropTypes from 'prop-types'
import { Icon } from 'odeum-ui'

class MenuItem extends Component {

	activate = () => {
		this.props.onClick(this.props.route)
	}
	render() {
		return (
			<Link title={this.props.label} to={this.props.route} activeClassName={'active'} achordeon={this.props.achordeon}>
				<IconDiv><Icon color={'white'} iconSize={18} icon={this.props.icon} style={{ marginRight: '0px' }} /></IconDiv>
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