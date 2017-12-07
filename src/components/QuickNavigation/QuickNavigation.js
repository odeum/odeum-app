import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer, QuickNav,
	Spacer, TabList, TabItem,
	MenuItem, MenuList, Link
} from './QuickNavigationStyles'
import Tab from '../Tabs/Tab'
import { convertLabelToRoute } from '../utils/Functions'

//TODO:
//7. Active Menu Item

export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickNav: false,
			showButton: true,
			activeMenu: 0,
			activeTab: {
				tab: 0,
				menu: 0
			}
		}
	}

	tabClick = (e) => {
		var activeTab = { tab: parseInt(e.target.id, 10), menu: this.state.activeMenu }
		this.setState({ quickNav: false, activeTab: activeTab })
	}

	menuClick = () => (e) => {
		e.stopPropagation()
	}

	setActiveMenu = (index, closeNav) => (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({ activeMenu: index, quickNav: !closeNav })
	}

	openNav = () => {
		this.setState({ quickNav: !this.state.quickNav })
	}

	activeTab = (tab, menu) => tab === this.state.activeTab.tab && menu === this.state.activeTab.menu ? 'true' : 'false'

	renderMenuItem = (menu, index) => {
		var route = menu.props.route ? menu.props.route : convertLabelToRoute(menu.props.label)
		if (React.Children.toArray(menu.props.children)[0].type === Tab)
			return <MenuItem key={index} onClick={this.setActiveMenu(index, false)}>{menu.props.label}</MenuItem>
		else
			return <MenuItem key={index} onClick={this.setActiveMenu(index, true)}><Link to={route}>{menu.props.label}</Link></MenuItem>
	}

	renderTabItem = (tab, menu, index) => {
		var menuRoute = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		var route = tab.props.route !== undefined ? menuRoute + tab.props.route : menuRoute + convertLabelToRoute(tab.props.label)
		return <TabItem key={index} activetab={this.activeTab(index, this.state.activeMenu)} id={index} to={route} onClick={this.tabClick}>{tab.props.label ? tab.props.label : tab.props.route}</TabItem>
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
