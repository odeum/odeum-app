import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TabIconDiv, Link, TabText } from './TabStyles'
import { Icon } from 'odeum-ui'
import { withTheme } from 'styled-components'
import { withRouter } from 'react-router-dom'
class Tab extends PureComponent {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		active: false
	// 	}
	// }

	componentDidMount = () => {
		// this.setTabActive()
		console.log('cdm', 'Tab')

	}
	componentWillUnmount = () => {
		console.log('unmount', 'Tab')
	}

	setTabActive2 = () => {
		if (this.props.location.pathname === this.props.route)
			return true
		else
			return false
	}
	setTabActive = () => {
		if (!this.props.exact) {
			if (window.location.pathname.includes(this.props.route) && !this.state.active) {
				this.setState({ active: true })
			}
		}
		else {
			if (window.location.pathname === this.props.route && !this.state.active) {
				this.setState({ active: true })
			}
		}
	}

	iconIsActive = () => this.setTabActive2() ? this.props.theme.icon.selected : this.props.theme.icon.default

	render() {
		const { route, icon, label } = this.props
		// const { active } = this.state
		const { /* setTabActive, */ defaultProps, iconIsActive } = this
		return (
			<Link to={route} activetab={this.setTabActive2().toString()} /* onClick={setTabActive} */ >
				<TabIconDiv><Icon active={this.setTabActive2()} color={iconIsActive()} iconSize={20} icon={icon ? icon : defaultProps.icon} /></TabIconDiv>
				<TabText>
					{label}
				</TabText>
			</Link >
		)
	}
}

Tab.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string,
	icon: PropTypes.string
}


Tab.defaultProps = {
	label: 'Tab',
	icon: 'tab'
}
export default withRouter(withTheme(Tab))
