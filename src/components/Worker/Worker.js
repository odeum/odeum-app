import React, { Component } from 'react'
import { StyledWorker } from './WorkerStyles'


class Worker extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isWorking: false
		}
	}
	
	handleClick = () => {
		this.setState({ isWorking: true })
	}
	

	render() {		
		return (
			<StyledWorker>				
				<p>Is it working? ... {this.state.isWorking}</p>
				<button onClick={this.handleClick}>Make it work</button>
			</StyledWorker>
		)
	}
}

export default Worker

