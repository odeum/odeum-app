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
			// logo: this.props.logo ? this.props.logo.default : this.props.logos ? this.props.logos[0] : theme.logo.default,
			// logos: theme.logo.bigLogo && theme.logo.smallLogo ? [theme.logo.bigLogo, theme.logo.smallLogo] : undefined
		}
	}

	changeLogo = (logo) => {
		this.setState({ logo: window.innerWidth >= ScreenSizes.tablet ? logo.default : logo.smallLogo })
	}

	componentWillMount() {
		if (this.props.logo !== undefined) {
			if (this.props.logo === 'default')
				this.changeLogo(theme.logo)
			else
				this.changeLogo(this.props.logo)
			window.addEventListener('resize', this.changeLogo)
		}
	}
	componentWillUpdate = (nextProps, nextState) => {
		if (this.props.logo !== nextProps.logo)
			this.changeLogo(nextProps.logo)
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
		// console.log('renderLogo', logo)
		return (
			<LogoDiv to={'/'}>
				<LogoImg src={logo} />
			</LogoDiv>)
	}

	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		// console.log(this.props.logo)
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
	logo: PropTypes.object,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}

Header.defaultProps = {
	search: false,
	notification: false,
	avatar: false
}

export default Header