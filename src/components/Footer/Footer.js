import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledFooter, Link } from 'components/Footer/FooterStyles'
import Help from 'components/Help/Help'
import { ScreenSizes } from 'theme/media'

class Footer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			small: false
		}
	}

	componentWillMount() {
		this.smallHelp()
		window.addEventListener('resize', this.smallHelp)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.smallHelp)
	}

	smallHelp = () => {
		if (window.innerWidth <= ScreenSizes.tablet) {
			this.setState({ small: true })
		}
		else if (window.innerWidth > ScreenSizes.tablet) {
			this.setState({ small: false })
		}
	}

	render() {
		return (
			<StyledFooter>
				<Link href={this.props.labelLink ? this.props.labelLink : this.defaultProps.labelLink} target={this.props.target}>
					<div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center' }}>
						{this.props.label ? <this.props.label /> : <this.defaultProps.label />}
						&nbsp;| Debug: {this.props.debug}
					</div>
				</Link>
				<Help small={this.state.small} />
			</StyledFooter>
		)
	}
}

Footer.propTypes = {
	label: PropTypes.any,
	labelLink: PropTypes.string,
	target: PropTypes.string,
	debug: PropTypes.string
}

Footer.defaultProps = {
	label: <div>
		<b>ODEUM Code Lite </b> v1.0.0 © Copyright
	</div>,
	labelLink: '/',
	target: '',
	debug: ''

}

export default Footer