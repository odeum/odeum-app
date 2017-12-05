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
			logo: undefined
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
		if (this.props.logo !== nextProps.logo)
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

	renderLogo = () => {
		return (
		<LogoDiv to={'/'}>
			<LogoImg src={this.state.logo} />
		</LogoDiv>)
	}

	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		const { search, notification, avatar } = this.props
		// const { logo } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv quicknav={this.state.quicknav}>
				{renderLogo()}
				{search && renderSearchBar()}
				{avatar && renderAvatar()}
				{notification && renderNotification()}
			</HeaderDiv>
		)
	}
}

Header.propTypes = {
	logo: PropTypes.any,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}

Header.defaultProps = {
	search: false,
	notification: false,
	avatar: false,
	logo: theme.logo.default
}

export default Header