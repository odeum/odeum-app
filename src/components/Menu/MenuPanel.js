import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
import { MenuContainer } from './MenuStyles'

class MenuPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			achordeon: true,
			disableMenuAchordeon: false,
			activeMenu: '/'
		}
	}
	//#region Label Converting for Menu
	route = (child) => child.props.route ? child.props.route : this.convertLabelToRoute(child.props.label)
	convertLabelToRoute = (label) => {
		var route = '/' + label.replace(/\s+/g, '-').toLowerCase()
		return route
	}
	//#endregion

	//#region Tabs Routing + Get First Tab Route 
	getFirstChildRoute = (child) => {
		if (Array.isArray(child.props.children)) {
			if (child.props.children[0].props.route)
				return child.props.children[0].props.route
			else
				return this.convertChildLabelToRoute(child, true)
		}
		else if (child.props.children.props.route) { return child.props.children.props.route }
		else return this.convertChildLabelToRoute(child, false)
	}
	convertChildLabelToRoute = (child, many) => {
		var route = ''
		if (many === true) {
			if (child.props.children[0].props.label)
				route = '/' + child.props.children[0].props.label.replace(/\s+/g, '-').toLowerCase()
		}
		else if (child.props.children.props.label)
			route = '/' + child.props.children.props.label.replace(/\s+/g, '-').toLowerCase()
		// console.log('---route---')
		// console.log(route)
		return route
	}
	//#endregion

	//#region State Management

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)
	setActiveMenu = (route) => {
		this.setState({ activeMenu: route })
	}

	//#endregion

	//#region Rendering

	renderChild = (child) => () => child
	renderMenu = (children) => {
		console.log(window.location.pathname)
		return <MenuContainer>
			<MenuDiv>
				{children.map((child, index) => {
					console.log(this.route(child) + this.getFirstChildRoute(child))
					return (child.props.label ?
						<MenuItem key={index}
							active={this.state.activeMenu === (this.route(child) + this.getFirstChildRoute(child)) ? true : false}
							icon={child.props.icon}
							label={child.props.label}
							route={this.route(child) + this.getFirstChildRoute(child)}
							onClick={this.setActiveMenu} /> : null
					)
				})}
			</MenuDiv>
			{children.map((child, i) => {
				return <Route path={this.route(child)} exact={child.props.exact ? child.props.exact : undefined} route={this.route(child)} key={i} component={this.renderChild(child)} />
			})
			}
		</MenuContainer>
	}

	render() {
		const Children = []
		Array.isArray(this.props.children) ? Children.push(...this.props.children) : Children.push(this.props.children)
		return this.renderMenu(Children)
	}

	//#endregion
}

export default MenuPanel