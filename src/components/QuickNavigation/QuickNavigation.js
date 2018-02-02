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
import HelpPopUp from '../Help/HelpPopUp'
import { SetHelpID } from '../utils/HelpReducer'
import Protected from '../Login/Protected'
import Page from '../Menu/Page'
import SwipeEvents from './SwipeEvents'

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
			}
		}
	}

	componentWillMount = () => {
	}

	showQuickNavButton = () => {
		this.setState({ quickButton: true })
	}
	hideQuickNavButton = () => {
		this.setState({ quickButton: false })
	}
	helpClick = () => {
		this.setState({ showHelp: !this.state.showHelp })
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

	openNav = (e) => {
		e.stopPropagation()
		this.setState({ quickNav: !this.state.quickNav })
		if (this.state.showHelp === true)
			this.setState({ showHelp: false })
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
		// console.log(this.props.loggedIn, menu.props.label)
		if (this.props.loggedIn && menu.props.route === '/login') // Get the route to login as a prop from the redirectTo prop from menupanel
		{
			// console.log(this.props.loggedIn, menu)
			return null //Temporary
		}
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
		// console.log(tab, menu, index )
		var menuRoute = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		var route = tab.props.route !== undefined ? menuRoute + tab.props.route : menuRoute + convertLabelToRoute(tab.props.label)
		return <TabItem key={index.protected ? index.index + index.protected : index} helpid={tab.props.helpID} activetab={this.activeTab(index, this.state.activeMenu)} id={index} to={route} onClick={this.tabClick(index, tab.props.helpID)}>{tab.props.label ? tab.props.label : tab.props.route}</TabItem>
	}

	renderTabs() {
		if (this.state.activeMenu.protected !== undefined) {
			var ProtectedMenu = this.props.menus[this.state.activeMenu.index].props.children
			// console.log(ProtectedMenu)
			return React.Children.toArray(ProtectedMenu[this.state.activeMenu.protected].props.children).map((tab, index) =>
				tab.type === Tab ? this.renderTabItem(tab, ProtectedMenu[this.state.activeMenu.protected], { index: this.state.activeMenu.index, protected: index }) : undefined)
		}
		else {
			// console.log(React.Children.toArray(this.props.menus[this.state.activeMenu].props.children))
			return React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).map((tab, index) =>
				tab.type === Tab ? this.renderTabItem(tab, this.props.menus[this.state.activeMenu], index) : undefined)
		}
	}

	render() {
		// console.log(this.props)
		const { quickButton, quickNav, showHelp } = this.state
		return (
			<SwipeEvents onSwipedUp={this.showQuickNavButton} onSwipedDown={this.hideQuickNavButton}>
				{/* <QuickNav> */}
				<HelpPopUp openHelp={showHelp} handleHelp={this.helpClick} />
				{quickButton ?
					<QuickNavButton onClick={this.openNav}><Icon icon={'menu'} color={'white'} iconSize={18} style={{ marginRight: '8px' }} />Quick Menu</QuickNavButton>
					: <QuickNavButtonHidden></QuickNavButtonHidden>
				}
				{/* <SwipeEvents onSwiping={() => console.log('Swiping')} quickNav={quickNav} onClick={this.openNav}> */}
				<QuickNavContainer quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu onClick={this.menuClick()}>
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
