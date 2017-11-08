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
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.isWorking !== this.props.isWorking) {
			this.setState({ isWorking: nextProps.isWorking })	
		}
		this.setState({ isWorking: nextProps.isWorking })
	}
	

	render() {
		const { isWorking } = this.state
		return (
			<StyledWorker>
				It is working ... {isWorking}
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
