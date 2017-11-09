import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from 'theme/media'
import theme from 'theme/default'
export default class Header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			logo: this.props.logo ? this.props.logo : this.props.logos ? this.props.logos[0] : theme.logo.default,
			logos: theme.logo.bigLogo && theme.logo.smallLogo ? [theme.logo.bigLogo, theme.logo.smallLogo] : undefined
		}
	}

	changeLogo = () => {
		this.setState({ logo: window.innerWidth >= ScreenSizes.tablet ? this.state.logos[0] : this.state.logos[1] })
	}

	componentWillMount() {
		if (this.state.logos !== undefined) {
			this.changeLogo()
			window.addEventListener('resize', this.changeLogo)
		}
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.changeLogo)
	}

	renderNotification = () => {
		return (
			<div>NotiF</div>
		)
	}

	renderAvatar = () => {
		return (
			<div>Avatar</div>
		)
	}

	renderLogo = (logo) => {
		return (
			<LogoDiv to={'/'}>
				<LogoImg src={logo} />
			</LogoDiv>)
	}

	renderSearchBar = () => {
		return (<div>Search</div>)
	}
	
	render() {
		const { search, notification, avatar } = this.props
		const { logo } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv>
				{logo && renderLogo(logo)}
				{search && renderSearchBar()}
				{avatar && renderAvatar()}
				{notification && renderNotification()}
			</HeaderDiv>
		)
	}
}

Header.propTypes = {
	logo: PropTypes.string,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}

Header.defaultProps = {
	search: false, 
	notification: false,
	avatar: false
}

