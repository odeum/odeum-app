import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer,
	Spacer, TabList, TabItem,
	MenuItem, MenuList, Link, Header, SubHeader, QuickNavButtonHidden
} from './QuickNavigationStyles'
import Tab from '../Tabs/Tab'
import Menu from '../Menu/Menu'
import { convertLabelToRoute } from '../utils/Functions'
import { Icon } from 'odeum-ui'
import HeaderButton from './HeaderButton'
import { SetHelpID } from '../utils/HelpReducer'
import Protected from '../Login/Protected'
import Page from '../Menu/Page'
import SwipeEvents from './SwipeEvents'
// import QuickHelpPopup from './QuickHelp'
// import { GetHelpID } from '../utils/HelpReducer'
import Help from '../Help/Help'
export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickButton: true,
			quickNav: false,
			showButton: true,
			showHelp: false,
			activeMenu: 0,
			activeTab: {
				tab: 0,
				menu: 0
			},
		}
	}

	// getHelpItem = async (helpID) => {
	// 	var data = await GetHelpItem(helpID)
	// 	return data
	// }

	componentWillMount = async () => {
		// var data = await this.getHelpItem(GetHelpID())
		// this.setState({ helpObj: data })
	}

	showQuickNavButton = () => {
		this.setState({ quickButton: true })
	}
	hideQuickNavButton = () => {
		this.setState({ quickButton: false })
	}
	helpClick = () => {
		this.setState({ showHelp: true, quickNav: false })
	}
	openNav = (e) => {
		e.stopPropagation()
		if (this.state.showHelp === true)
			this.setState({ quickNav: false, showHelp: false })
		else
			this.setState({ quickNav: !this.state.quickNav })
		// if (this.state.showHelp === true)
		// 	this.setState({ showHelp: false })
	}

	tabClick = (id, helpID) => (e) => {
		SetHelpID(helpID)
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

	activeTab = (tab, menu) => tab === this.state.activeTab.tab && menu === this.state.activeTab.menu ? 'true' : 'false'

	renderProtectedMenu = (menu, index) => {
		if (menu.type === Protected) {
			if (this.props.loggedIn === true) {
				const childs = React.Children.toArray(menu.props.children)
				return childs.map((m, i) => {
					return this.renderMenuItem(m, { index: index, protected: i })
				})
			}
		}
		else return this.renderMenuItem(menu, index)
	}

	indexGen = (index) => {
		return index.protected !== undefined ? index.index + index.protected : index
	}

	renderMenuItem = (menu, index) => {
		var icon = menu.props.icon ? menu.props.icon : 'menu'
		var route = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		const { activeMenu } = this.state
		const { indexGen, setActiveMenu } = this
		if (menu.type === Menu) {
			if (menu.props.children.props !== undefined) {
				if (menu.props.children.props.label !== undefined) {
					var childRoute = menu.props.children.props.route ? menu.props.children.props.route : convertLabelToRoute(menu.props.children.props.label)
					route = route + childRoute
				}
			}
		}
		// if (this.props.loggedIn && menu.props.route === '/login') // Get the route to login as a prop from the redirectTo prop from menupanel
		// {
		// 	return null //Temporary
		// }
		if (route === '' || route === '/') {
			return <MenuItem key={indexGen(index)}
				index={indexGen(index)}
				activeMenu={indexGen(activeMenu)}
				onClick={setActiveMenu(index, true)}>
				<Link to={route}>
					<Icon icon={'home'} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
					{'Home'}
				</Link>
			</MenuItem >
		}
		else {
			if (menu.type === Menu || menu.type === Page) {
				if (React.Children.toArray(menu.props.children)[0].type === Tab && React.Children.toArray(menu.props.children).length > 1)
					return (<MenuItem key={indexGen(index)}
						index={indexGen(index)}
						activeMenu={indexGen(activeMenu)}
						onClick={setActiveMenu(index, false)}>
						<Icon icon={icon} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
						{menu.props.label}
					</MenuItem>)

				else {
					return <MenuItem key={indexGen(index)}
						index={indexGen(index)}
						activeMenu={indexGen(activeMenu)}
						onClick={setActiveMenu(index, true)}>
						<Link to={route}>
							<Icon icon={icon} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
							{menu.props.label}
						</Link>
					</MenuItem >
				}
			}
		}
	}

	renderTabItem = (tab, menu, index) => {
		var menuRoute = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		var route = tab.props.route !== undefined ? menuRoute + tab.props.route : menuRoute + convertLabelToRoute(tab.props.label)
		return <TabItem key={index.protected ? index.index + index.protected : index} helpid={tab.props.helpID} activetab={this.activeTab(index, this.state.activeMenu)} id={index} to={route} onClick={this.tabClick(index, tab.props.helpID)}>{tab.props.label ? tab.props.label : tab.props.route}</TabItem>
	}

	renderTabs() {
		if (this.state.activeMenu.protected !== undefined) {
			var ProtectedMenu = this.props.menus[this.state.activeMenu.index].props.children
			return React.Children.toArray(ProtectedMenu[this.state.activeMenu.protected].props.children).map((tab, index) =>
				tab.type === Tab ? this.renderTabItem(tab, ProtectedMenu[this.state.activeMenu.protected], { index: this.state.activeMenu.index, protected: index }) : undefined)
		}
		else {
			return React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).map((tab, index) =>
				tab.type === Tab ? this.renderTabItem(tab, this.props.menus[this.state.activeMenu], index) : undefined)
		}
	}

	render() {
		const { quickButton, quickNav, showHelp } = this.state
		return (
			<SwipeEvents onSwipedUp={this.showQuickNavButton} onSwipedDown={this.hideQuickNavButton}>
				{/* Let help component handle the 'help' stuff */}
				<Help showHelp={showHelp} small={true} />
				{quickButton ?
					<QuickNavButton onClick={this.openNav}><Icon icon={'menu'} color={'white'} iconSize={18} style={{ marginRight: '8px' }} />Quick Menu</QuickNavButton>
					: <QuickNavButtonHidden></QuickNavButtonHidden>
				}
				<QuickNavContainer helpOpen={showHelp} quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu quickNav={quickNav} onClick={this.menuClick()}>
						<Header>
							<SubHeader>
								<HeaderButton icon={'help'} onClick={this.helpClick} />
								<HeaderButton icon={'search'} />
							</SubHeader>
							<div style={{ alignSelf: 'center', justifyContent: 'center' }}>
								Quick Navigation
							</div>
							<HeaderButton icon={'close'} onClick={this.openNav} />
						</Header>
						<Spacer />

						<TabList>
							{this.renderTabs()}
						</TabList>
						<Spacer />
						<MenuList>
							{React.Children.toArray(this.props.menus).map((menu, index) =>
								this.renderProtectedMenu(menu, index)
							)}
						</MenuList>
					</QuickNavMenu>
				</QuickNavContainer>
				{/* </QuickNav > */}
			</SwipeEvents>
		)
	}
}
