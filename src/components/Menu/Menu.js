import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'

class Menu extends Component {
	//#region Label Converting for Menu
	route = (child) => this.props.route ? this.props.route : this.convertLabelToRoute(this.props.label)
	convertLabelToRoute = (label) => {
		let route = label.replace(/\s+/g, '-').toLowerCase()
		route = '/' + route
		// console.log('---route---')
		// console.log(route)
		return route
	}
	//#endregion
	childRoute = (child) => {
		return child.props.route ? child.props.route : this.convertLabelToRoute(child.props.label)
	}
	renderChildren = (children) => children.map((child, index) => {
		return <Route key={index} path={this.route() + this.childRoute(child)} component={this.renderChild(child)} />
	})

	renderChild = (child) => () => child.props.children

	/* 					
	Todo: Use convertLabelToRoute for Tabs
	*/
	renderTabs = (children) => {
		if (children[0].type === Tab)
			return (
				<SceneDiv>
					<TabList>
						{children.map((child, index) => (
							<Tab key={index}
								active={window.location.pathname.includes(this.childRoute(child)) ? true : false}
								label={child.props.label}
								icon={child.props.icon ? child.props.icon : this.props.icon}
								route={this.route() + this.childRoute(child)} />
						))}
					</TabList>
					{this.renderChildren(children)}
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
			<Workspace>
				{children}
			</Workspace>
		)
	}

	render() {
		const Children = []
		Array.isArray(this.props.children) ? Children.push(...this.props.children) : Children.push(this.props.children)
		return this.renderTabs(Children)
	}
}

Menu.propTypes = {
	label: PropTypes.string,
	route: PropTypes.string,
	icon: PropTypes.string,
}

Menu.defaultProps = {
	icon: 'menu'
}


export default Menu
