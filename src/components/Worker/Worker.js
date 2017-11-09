import React, { Component } from 'react'

class Worker extends Component {

	state = {
		isWorking: false
	}
	
	handleClick = () => {
		this.setState({ isWorking: true })
	}
	
	render() {		
		return (
			<div>
				Is it working? ... {this.state.isWorking}
				<button onClick={this.handleClick}>Make it work</button>
			</div>
		)
	}
}

export default Worker

