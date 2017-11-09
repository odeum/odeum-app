import React, { Component } from 'react'
import { MenuDiv as MenuCont, MenuHeader, IconDiv } from '../MenuStyles'
import { Icon } from 'odeum-ui'

export default class MenuDiv extends Component {
	constructor(props) {
		super(props)
		this.state = {
			achordeon: true,
			disableAchordeon: false
		}
	}
	sizes = {
		giant: 1170,
		desktop: 992,
		tablet: 768,
		phone: 376
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => {
		if (window.innerWidth < this.sizes.tablet && !this.state.disableAchordeon) {
			this.setState({ achordeon: false, disableMenuAchordeon: true })
		}
		else if (window.innerWidth >= this.sizes.tablet && this.state.disableMenuAchordeon) {
			this.setState({ disableAchordeon: false })
		} 
	}

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)
	
	render() {
		const { disableAchordeon } = this.state
		return (
			<MenuCont achordeon={this.state.achordeon}>
				<MenuHeader>
					<IconDiv onClick={!disableAchordeon ? this.switch : null}
						style={{ cursor: 'pointer' }}>
						<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
					</IconDiv>
				</MenuHeader>
				{this.props.children}
			</MenuCont>
		)
	}
}
