import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from '../Workspace/Workspace'
import { convertLabelToRoute } from '../utils/Functions'
class Menu extends Component {

	componentWillMount = () => {
		// console.log('-------')
		// console.log('this.props.activeMenu', this.props.activeMenu)
		// console.log('this.props.route', this.props.route)
		// console.log('this.props.index', this.props.index)
		// console.log('-----')
		if (window.location.pathname.includes(this.props.route) && this.props.activeMenu !== this.props.index) {
			this.props.setActiveMenu(this.props.index)
		}
	}

	//#region Label Converting for Menu
	route = (child) => this.props.route ? this.props.route : convertLabelToRoute(this.props.label)

	childRoute = (child) => {
		return child.props.route ? child.props.route : convertLabelToRoute(child.props.label)
	}

	//#endregion

	//#region RenderChildren

	renderChildren = (children) => children.map((child, index) => {
		return <Route key={index} path={this.route() + this.childRoute(child)} component={this.renderChild(child)} />
	})

	renderChild = (child) => () => <Workspace >{child.props.children}</Workspace>

	//#endregion

	renderTabs = (children) => {
		if (children[0].type === Tab)
			return (
				<SceneDiv>
					{!this.props.quicknav ? <TabList>
						{children.map((child, index) => (
							<Tab key={index}
								helpID={child.props.helpID}
								active={window.location.pathname.includes(this.childRoute(child)) ? true : false}
								label={child.props.label}
								icon={child.props.icon}
								route={this.route() + this.childRoute(child)} />
						))}
					</TabList> : null}
					<Switch>
						{this.renderChildren(children)}
					</Switch>
				</SceneDiv>
			)
		else
			return (
				<SceneDiv>
					{this.renderNoTabs(children)}
				</SceneDiv>
			)
	}

	renderNoTabs = (children) => {
		return (
			<Workspace helpID={this.props.helpID ? this.props.helpID : null}>
				{children}
			</Workspace>
		)
	}

	render() {
		return this.renderTabs(React.Children.toArray(this.props.children))
	}
}

Menu.propTypes = {
	label: PropTypes.string,
	route: PropTypes.string,
	icon: PropTypes.string,
}



export default Menu
