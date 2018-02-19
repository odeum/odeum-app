import React, { Component } from 'react'
import Workspace from '../Workspace/Workspace'
import { SceneDiv } from '../Tabs/TabStyles'

export default class NotFound extends Component {
	render() {
		return (
			<SceneDiv>
				<Workspace>
					<h2>
						404
					</h2>
				</Workspace>
			</SceneDiv>
		)
	}
}
