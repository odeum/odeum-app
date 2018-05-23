import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from '../Workspace/Workspace'
import { convertLabelToRoute, isExact } from '../utils/Functions'
import { SetHelpID } from '../utils/HelpReducer'
import { withRouter } from 'react-router-dom'

export const TabContext = React.createContext()

class Menu extends Component {

	constructor(props) {
		super(props)

		this.state = {
			extrChildren: []
		}
	}

	componentDidMount = () => {
		this.setHelpID()
	}
	addTab = (label, route, icon, child) => {
		var newTab = <Tab
			key={9}
			tabID={9}
			exact={false}
			label={label}
			icon={icon}
			route={route}
			children={child}
		/>
		var newExtraChildren = this.state.extrChildren
		newExtraChildren.push(newTab)
		this.setState({
			extrChildren: newExtraChildren
		})
	}
	setHelpID = () => {
		if (this.props.helpID) {
			SetHelpID(this.props.helpID)
		}
	}
	componentWillUnmount = () => {
		console.log('unmount', 'Menu')

	}

	//#region Label Converting for Menu
	route = () => this.props.route !== undefined ? this.props.route : convertLabelToRoute(this.props.label)

	childRoute = (child) => {
		return child.props.route !== undefined ? child.props.route : convertLabelToRoute(child.props.label)
	}

	//#endregion

	//#region RenderChildren

	renderChildren = (children) => children.map((child, index) => {
		return <Route key={index} path={this.route() + this.childRoute(child)}
			exact={isExact(this.childRoute(child))}
			component={this.renderChild(child)} />
	})

	renderChild = (child) => () => <Workspace>{React.cloneElement(child.props.children, { addTab: this.addTab })}</Workspace>

	//#endregion

	renderTabs = (children) => {
		if (children[0].type === Tab)
			return (
				<SceneDiv>
					<TabContext.Consumer>
						{(value) => {
							console.log(value)
							return <React.Fragment>
								{!this.props.SmallScreen ?
									<TabList>
										{value.children.map((child, index) => {
											console.log(child)
											return <Tab key={index}
												helpID={child.props.helpID ? child.props.helpID : undefined}
												tabID={index}
												exact={isExact(this.childRoute(child))}
												label={child.props.label}
												icon={child.props.icon}
												route={this.route() + this.childRoute(child)}
											/>
										})
										}

									</TabList> : null}
								{this.renderChildren(value.children)}
							</React.Fragment>
						}}

					</TabContext.Consumer>
				</SceneDiv >
			)
		else {
			return (
				<SceneDiv>
					{this.renderNoTabs(children)}
				</SceneDiv>
			)
		}
	}

	renderNoTabs = (children) => {
		return (
			<Workspace noTab helpID={this.props.helpID ? this.props.helpID : null}>
				{children}
			</Workspace>
		)
	}

	render() {
		var children = React.Children.toArray(this.props.children)
		// this.addTab('Test', '/test', 'info', <div>Child</div>)
		children.push(...this.state.extrChildren)
		return <TabContext.Provider value={{ children: [...this.state.extrChildren, ...React.Children.toArray(this.props.children)] }}>
			{this.renderTabs(React.Children.toArray(this.props.children))}
		</TabContext.Provider>
	}
}

Menu.propTypes = {
	label: PropTypes.string,
	route: PropTypes.string,
	icon: PropTypes.string,
}

export default withRouter(Menu)