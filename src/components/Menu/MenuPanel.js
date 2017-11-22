import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
import { MenuContainer } from './MenuStyles'
import QuickNavigation from '../QuickNavigation/QuickNavigation'
import { convertLabelToRoute } from '../utils/Functions'
import {ScreenSizes as sizes } from '../../theme/media'
import NotFound from '../AppContainer/NotFound'
class MenuPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quicknav: false,
			disableMenuAchordeon: false,
			activeMenu: 0
		}
	}
	componentWillMount = () => {
		this.updateWindowSize()
		window.addEventListener('resize', this.updateWindowSize)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowSize)
	}

	//#region Display quickNav or Menu 
	updateWindowSize = () => {
		// console.log('MenuDiv', 'resized')s
		if (window.innerWidth < sizes.tablet)
			//QuickNav on
			this.setState({
				quicknav: true
			})
		if (window.innerWidth >= sizes.tablet)
			this.setState({
				quicknav: false
			})

	}
	//#endregion 



	//#region Routing + Get First Child Route 

	route = (child) => child.props.route ? child.props.route : convertLabelToRoute(child.props.label)

	getFirstChildRoute = (child) => {
		var children = React.Children.toArray(child.props.children)
		if (children[0].props.route)
			return children[0].props.route
		else
		if (children[0].props.label)
			return convertLabelToRoute(children[0].props.label)
		else
			return ''
	}

	convertChildLabelToRoute = (child, many) => {
		var route = ''
		var children = React.Children.toArray(child.props.children)
		if (children[0].props.label)
			route = convertLabelToRoute(children[0].props.label)
		return route
	}
	//#endregion

	//#region State Management

	switch = (bool) => (
		this.setState({ quicknav: bool })
	)
	setActiveMenu = (key) => {
		// console.log('ActiveMenu', key)
		this.setState({ activeMenu: key })
	}

	//#endregion

	//#region Rendering

	renderChild = (child, index) => ({ match }) => { return React.cloneElement(child, { quicknav: this.state.quicknav, setActiveMenu: this.setActiveMenu, index: index, activeMenu: this.state.activeMenu, route: this.route(child) }) }
	renderMenu = (children) => {
		return <MenuContainer quicknav={this.state.quicknav}>
			{!this.state.quicknav ? <MenuDiv quicknav={this.switch}>
				{children.map((child, index) => {
					return (child.props.label ?
						<MenuItem key={index}
							SetHelpID={this.props.SetHelpID}
							MenuID={index}
							helpID={child.props.helpID}
							active={this.state.activeMenu === (index) ? true : false}
							icon={child.props.icon}
							label={child.props.label}
							route={this.route(child) + this.getFirstChildRoute(child)}
							onClick={this.setActiveMenu} /> : null
					)
				})}
			</MenuDiv> : <QuickNavigation menus={children} />}
			<Switch>
				{children.map((child, i) => {
					return <Route key={i} path={this.route(child)} exact={child.props.exact ? child.props.exact : undefined} route={this.route(child)} component={this.renderChild(child, i)} />
				})}
				<Route path={'*'} component={NotFound} />
			</Switch>
		</MenuContainer>
	}

	render() {
		return this.renderMenu(React.Children.toArray(this.props.children))
	}

	//#endregion
}

export default MenuPanel