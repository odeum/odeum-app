import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from '../../theme/media'
import theme from '../../theme/default'


class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quicknav: false,
			logo: this.props.logo
		}
	}

	updateLogo = () => {
		this.changeLogo(this.props.logo ? this.props.logo : theme.logo)
		this.setState({ quicknav: window.innerWidth < ScreenSizes.tablet ? true : false })
	}
	changeLogo = (logo) => {
		this.setState({ logo: logo.default })
	}
	componentWillMount = () => {
		this.updateLogo()
		window.addEventListener('resize', this.updateLogo)
	}
	componentWillUpdate = (nextProps, nextState) => {
		var nextLogo = nextProps.logo.default
		if (nextLogo !== undefined && this.state.logo !== nextLogo)
			this.changeLogo(nextProps.logo)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.changeLogo)
	}
	renderNotification = () => (
		<div>NotiF</div>
	)

	renderAvatar = () => (
		<div>Avatar</div>
	)

	renderLogo = () => (
		<LogoDiv to={'/'}>
			<LogoImg src={this.state.logo} />
		</LogoDiv>)


	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		const { render, search, notification, avatar } = this.props
		// const { logo } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv quicknav={this.state.quicknav}>
				{this.props.children ? this.props.children : <React.Fragment>
					{renderLogo()}
					{render && render()}
					{search && renderSearchBar()}
					{avatar && renderAvatar()}
					{notification && renderNotification()}
				</React.Fragment>
				}
			</HeaderDiv>
		)
	}
}

Header.propTypes = {
	logo: PropTypes.any,
	render: PropTypes.func,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}

Header.defaultProps = {
	search: false,
	notification: false,
	avatar: false,
	logo: theme.logo
}

export default Header