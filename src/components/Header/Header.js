import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderContainer } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from '../../theme/media'
import theme from '../../theme/default'


class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			SmallScreen: false
		}
	}
	shouldComponentUpdate = (nextProps, nextState) => {
		if ((nextProps.logo.default !== this.props.logo.default) ||
			(this.state.SmallScreen !== nextState.SmallScreen)) {
			return true
		}
		else
			return false
	}
	OnSmallScreen = () => {
		this.setState({ SmallScreen: window.innerWidth < ScreenSizes.tablet ? true : false })
	}
	componentWillMount = () => {
		this.OnSmallScreen()
		window.addEventListener('resize', this.OnSmallScreen)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.OnSmallScreen)
	}
	renderNotification = () => (
		<div>NotiF</div>
	)

	renderAvatar = () => (
		<div>Avatar</div>
	)

	renderLogo = () => (
		<LogoDiv to={'/'}>
			<LogoImg src={this.props.logo.default} />
		</LogoDiv>)


	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		const { render, search, notification, avatar, children } = this.props
		const { SmallScreen } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderContainer SmallScreen={SmallScreen}>
				{children ? children : <React.Fragment>
					{renderLogo()}
					{render && render()}
					{search && renderSearchBar()}
					{avatar && renderAvatar()}
					{notification && renderNotification()}
				</React.Fragment>
				}
			</HeaderContainer>
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