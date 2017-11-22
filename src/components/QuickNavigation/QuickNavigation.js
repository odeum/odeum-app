import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer, QuickNav,
	Spacer, TabList, TabItem,
	MenuItem, MenuList, Link
} from './QuickNavigationStyles'
// import { NavLink } from 'react-router-dom'
import Tab from '../Tabs/Tab'
import { convertLabelToRoute } from '../utils/Functions'

//TODO:
//7. Active Menu Item, Active Tab Item

export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickNav: false,
			showButton: true,
			activeMenu: 0
		}
	}
	tabClick = () => {
		this.setState({ quickNav: false })
	}
	menuClick = () => (e) => {
		e.stopPropagation()
	}
	setActiveMenu = (index) => (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({ activeMenu: index })
	}
	openNav = () => {
		this.setState({ quickNav: !this.state.quickNav })
	}

	renderMenuItem = (menu, index) => {
		var route = menu.props.route ? menu.props.route : convertLabelToRoute(menu.props.label)
		if (React.Children.toArray(menu.props.children)[0].type === Tab)
			return <MenuItem key={index} onClick={this.setActiveMenu(index)}>{menu.props.label}</MenuItem>
		else
			return <MenuItem key={index} onClick={this.setActiveMenu(index)}><Link to={route}>{menu.props.label}</Link></MenuItem>
	}
	renderTabItem = (tab, menu, index) => {
		var menuRoute = menu.props.route ? menu.props.route : convertLabelToRoute(menu.props.label)
		var route = tab.props.route ? menuRoute + tab.props.route : menuRoute + convertLabelToRoute(tab.props.label)
		return <TabItem key={index} to={route} onClick={this.tabClick}>{tab.props.label ? tab.props.label : tab.props.route}</TabItem>
	}
	render() {
		// console.log(this.props)
		const { quickNav } = this.state
		return (

			<QuickNav>
				<QuickNavButton onClick={this.openNav}>Quick Navigation</QuickNavButton>
				<QuickNavContainer quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu onClick={this.menuClick()}>
						<button onClick={this.openNav}>X</button>
						<Spacer />

						<TabList>
							{React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).map((tab, index) =>
								tab.type === Tab ? this.renderTabItem(tab, this.props.menus[this.state.activeMenu], index) : undefined)}
						</TabList>
						<Spacer />
						<MenuList>
							{React.Children.toArray(this.props.menus).map((menu, index) =>
								this.renderMenuItem(menu, index)
							)}
						</MenuList>
					</QuickNavMenu>
				</QuickNavContainer>
			</QuickNav >



		)
	}
}
