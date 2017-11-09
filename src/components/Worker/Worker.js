import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
		const { isWorking } = this.state
		return (
			<StyledWorker>
				<p>Is it working? ... {isWorking}</p>
				<button onClick={this.handleClick}>Make it work</button>
			</StyledWorker>
		)
	}
}

Worker.propTypes = {
	isWorking: PropTypes.bool
}

Worker.defaultProps = {
	isWorking: false
}

export default Worker

