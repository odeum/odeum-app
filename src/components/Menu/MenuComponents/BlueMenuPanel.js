import React, { PureComponent } from 'react'
import { BlueMenuContainer, MenuHeader, IconDiv, MenuFooter, DefaultHeader } from '../MenuStyles'
import { Icon } from 'odeum-ui'

class BlueMenuPanel extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			achordeon: true
		}
	}

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)

	render() {
		const CustomHeaderComponents = this.props.top
		const CustomFooterComponents = this.props.bottom
		const { onMenuClickClose } = this.props
		return (
			<BlueMenuContainer achordeon={this.state.achordeon}>
				{CustomHeaderComponents.length === 0 ? <DefaultHeader>
					<IconDiv onClick={this.switch}
						style={{ cursor: 'pointer', alignSelf: 'left' }}>
						<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
					</IconDiv>
				</DefaultHeader>
					: <MenuHeader>{this.props.top}</MenuHeader>}
				{onMenuClickClose ? this.props.children.map(c => c !== null ? React.cloneElement(c, { ...c.props, switch: this.switch, achordeon: this.state.achordeon }) : null) : this.props.children}
				<MenuFooter>
					{CustomFooterComponents ? CustomFooterComponents : null}
				</MenuFooter>
			</BlueMenuContainer>
		)
	}
}


export default BlueMenuPanel