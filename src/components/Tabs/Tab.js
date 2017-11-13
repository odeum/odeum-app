import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabIconDiv, Link, TabText } from './TabStyles'
import { Icon } from 'odeum-ui'
import theme from '../../theme/default'


class Tab extends Component {
	
	
		componentWillMount() {
			if (this.props.helpID && this.props.active) {
				this.props.SetHelpID(this.props.helpID)
			}
		}
		iconIsActive = () => this.props.active ? theme.icon.selected : theme.icon.default
	
		render() {
			return (
				<Link to={this.props.route} activeClassName={'active'}>
					<TabIconDiv><Icon color={this.iconIsActive()} iconSize={20} icon={this.props.icon ? this.props.icon : this.defaultProps.icon} style={{ marginRight: '0px' }} /></TabIconDiv>
					<TabText>
						{this.props.label}
					</TabText>
				</Link>
			)
		}
	}
	
	Tab.propTypes = {
		label: PropTypes.string.isRequired,
		route: PropTypes.string,
		icon: PropTypes.string
	}
	
	// Tab.defaultProps = {
	//	label:'Tab',
	// 	icon: 'tab'
	// }
	export default Tab
	