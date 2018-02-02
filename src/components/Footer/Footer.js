import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledFooter, Link } from './FooterStyles'
import Help from '../Help/Help'
import { ScreenSizes } from '../../theme/media'

class Footer extends PureComponent {
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
		if (window.innerWidth < ScreenSizes.tablet) {
			this.setState({ small: true })
		}
		else if (window.innerWidth >= ScreenSizes.tablet) {
			this.setState({ small: false })
		}
	}

	render() {
		const { help, labelLink, label, target, helpID, helpLabel } = this.props
		return (
			!this.state.small ? <StyledFooter>
				<Link href={labelLink ? labelLink : this.defaultProps.labelLink} target={target}>
					<div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center' }}>
						{label ? <this.props.label /> : <Footer.defaultProps.label />}
						{/* &nbsp;| Debug: {this.props.helpID} */}
					</div>
				</Link>
				{help ? <Help small={this.state.small} helpID={helpID} helpLabel={helpLabel} /> : null}
			</StyledFooter> : null
		)
	}
}

Footer.propTypes = {
	label: PropTypes.any,
	labelLink: PropTypes.string,
	target: PropTypes.string,
	debug: PropTypes.string
}
var date = new Date()

Footer.defaultProps = {
	label: () => <div>
		<b>ODEUM Code Lite </b> v1.0.0 © Copyright {' '}{date.getFullYear()}
	</div>,
	labelLink: '/',
	target: '',
	debug: ''

}

export default Footer