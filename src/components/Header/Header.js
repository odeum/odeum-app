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
		if (window.innerWidth < ScreenSizes.tablet) {
			this.setState({ SmallScreen: true })
		}
		else {
			if (window.innerWidth >= ScreenSizes.tablet && this.state.SmallScreen === true)
				this.setState({ SmallScreen: false })
		}
	}

	componentDidMount = () => {
		this.OnSmallScreen()
		window.addEventListener('resize', this.OnSmallScreen)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.OnSmallScreen)
	}

	renderNotification = () => (
		this.props.notifComponent ? <this.props.notifComponent /> : <div>NotiF</div>
	)

	renderUserLoggedIn = () => (
		this.props.userComponent ? <this.props.userComponent /> : <div>Avatar</div>
	)

	renderLogo = () => (
		<LogoDiv to={'/'}>
			<LogoImg src={this.props.logo.default} />
		</LogoDiv>)


	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		const { render, search, notification, userLogin, children } = this.props
		const { SmallScreen } = this.state
		const { renderLogo, renderSearchBar, renderUserLoggedIn, renderNotification } = this
		return (
			<HeaderContainer SmallScreen={SmallScreen}>
				{children ? children : <React.Fragment>
					{renderLogo()}
					{render && render()}
					{search && renderSearchBar()}
					{userLogin && renderUserLoggedIn()}
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