import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
import NotFound from '../AppContainer/NotFound'
import QuickNavigation from '../QuickNavigation/QuickNavigation'
import { convertLabelToRoute, isExact } from '../utils/Functions'
import { ScreenSizes as sizes } from '../../theme/media'
import Tab from '../Tabs/Tab'
import { Redirect } from 'react-router-dom'
import Protected from '../Login/Protected'
import Menu from './Menu'
import Page from './Page'

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
		if (children[0].type === Tab) {
			if (children[0].props.route !== undefined)
				return children[0].props.route
			else {
				if (children[0].props.label)
					return convertLabelToRoute(children[0].props.label)
				else
					return ''
			}
		} else
			return ''
	}

	convertChildLabelToRoute = (child) => {
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
	setActiveMenu = (label, id) => {
		this.setState({ activeMenu: label })
	}

	//#endregion

	//#region Rendering

	renderMenuItem = (child, index) => {
		return <MenuItem key={index}
			MenuID={index}
			helpID={child.props.helpID}
			active={this.state.activeMenu === (index) ? true : false}
			icon={child.props.icon}
			label={child.props.label}
			route={this.route(child) + this.getFirstChildRoute(child)}
			onClick={this.setActiveMenu}
			arrow={this.props.arrows} />
	}

	renderRoutes = (children) => {
		return children.map((child, i) => {
			if (child.type !== Protected && (child.type === Menu || child.type === Page)) {
				return <Route key={i} path={this.route(child)} exact={child.props.exact ? child.props.exact : isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i)} />
			}
			else {
				if (this.props.isLoggedIn !== false) {
					var childs = React.Children.toArray(child.props.children)
					return childs.map((child, proti) => {
						if (child.type === Menu || child.type === Page) {
							return <Route key={proti + i} path={this.route(child)} exact={child.props.exact ? child.props.exact : isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i + proti)} />
						}
						else return null
					})
				}
				else {
					return null
				}

			}
		})
	}
	renderBottomItems = (children) => {
		var BottomItems = []
		children.forEach((child, index) => {
			if (child.type === Protected) {
				if (this.props.isLoggedIn !== false) {
					const childs = React.Children.toArray(child.props.children)
					childs.forEach((protchild, protindex) => {
						if (protchild.props.bottom && !protchild.props.top) {
							if (protchild.type !== Menu && protchild !== Page)
								BottomItems.push(protchild)
							else
								BottomItems.push(this.renderMenuItem(protchild, index + protindex))
						}
					})
				}
			}
			else {
				if (child.props.bottom && !child.props.top)
					if (child.type !== Menu && child.type !== Page)
						BottomItems.push(child)
					else
						BottomItems.push(this.renderMenuItem(child, index))

			}
		})
		return BottomItems
	}

	renderTopItems = (children) => {
		var TopItems = []
		children.forEach((child, index) => {
			if (child.type === Protected) {
				if (this.props.isLoggedIn !== false) {
					const childs = React.Children.toArray(child.props.children)
					childs.forEach((protchild, protindex) => {
						if (!protchild.props.bottom && protchild.props.top)
							if (protchild.type !== Menu && protchild !== Page)
								TopItems.push(protchild)
							else
								TopItems.push(this.renderMenuItem(protchild, index + protindex))

					})
				}
			}
			else {
				if (!child.props.bottom && child.props.top)
					if (child.type !== Menu && child.type !== Page)
						TopItems.push(child)
					else
						TopItems.push(this.renderMenuItem(child, index))
			}

		})
		return TopItems
	}

	renderMenuItems = (children) => {
		// console.log(children)
		return children.map((child, index) => {
			if (child.type === Protected && !child.props.bottom && !child.props.top) {
				if (this.props.isLoggedIn === false) {
					return null
				}
				else {
					const childs = React.Children.toArray(child.props.children)
					return childs.map((protchild, protindex) => {
						if (!protchild.props.bottom && protchild.props.label && !protchild.props.top)
							return this.renderMenuItem(protchild, protindex + index)
						else return null
					}
					)
				}
			}
			else {
				if (!child.props.bottom && !child.props.top && child.props.label)
					return this.renderMenuItem(child, index)
				else return null
			}

		})
	}

	renderChild = (child, index) => ({ match }) => { return React.cloneElement(child, { ...child.props, quicknav: this.state.quicknav, setActiveMenu: this.setActiveMenu, activeMenu: this.state.activeMenu, route: this.route(child), MenuID: index }) }

	renderMenu = (children) => {
		return <React.Fragment>
			{!this.state.quicknav ?
				<MenuDiv
					quicknav={this.switch}
					top={this.renderTopItems(children)}
					bottom={this.renderBottomItems(children)}>
					{/* {this.renderTopMenuItems(children)} */}
					{this.renderMenuItems(children)}
				</MenuDiv> : <QuickNavigation menus={children} loggedIn={this.props.isLoggedIn !== undefined ? this.props.isLoggedIn : true} />}
			<Switch>
				{this.renderRoutes(children)}
				<Route path={'*'}
					render={this.props.login === true ?
						(this.props.isLoggedIn === true ? () => <NotFound /> : () => <Redirect to={this.props.redirectTo} />)
						: () => <NotFound />} />
			</Switch>
		</React.Fragment>
	}

	render() {
		return this.renderMenu(React.Children.toArray(this.props.children))
	}

	//#endregion
}
MenuPanel.defaultProps = {
	login: false
}
export default MenuPanel