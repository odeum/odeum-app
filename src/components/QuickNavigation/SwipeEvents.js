/*  
    Source - https://github.com/iamham/react-swipe-events 
    Updated to React@16
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { QuickNav } from './QuickNavigationStyles'

class SwipeEvents extends Component {

	constructor(props, context) {
		super(props)
		this.state = { originalX: 0, originalY: 0 }
	}

	onTouchStart = (e) => {
		const touch = e.changedTouches[0]
		const current = this.getCurrentPosition(touch)

		this.setState({ originalX: current.x, originalY: current.y })
	}

	onTouchMove = (e) => {
		const touch = e.changedTouches[0]
		const delta = this.getDelta(touch)
		const current = this.getCurrentPosition(touch)
		this.props.onSwiping && this.props.onSwiping(e, this.state.originalX, this.state.originalY, current.x, current.y, delta.x, delta.y)
	}

	onTouchEnd = (e) => {
		const touch = e.changedTouches[0]
		const delta = this.getDelta(touch)
		const current = this.getCurrentPosition(touch)

		if (Math.abs(delta.x) > this.props.threshold) {
			if (delta.x > 0) this.props.onSwipedRight && this.props.onSwipedRight(e, this.state.originalX, current.x)
			if (delta.x < 0) this.props.onSwipedLeft && this.props.onSwipedLeft(e, this.state.originalX, current.x)
		}

		if (Math.abs(delta.y) > this.props.threshold) {
			if (delta.y > 0) this.props.onSwipedDown && this.props.onSwipedDown(e, this.state.originalY, current.y)
			if (delta.y < 0) this.props.onSwipedUp && this.props.onSwipedUp(e, this.state.originalY, current.y)
		}

		this.props.onSwiped && this.props.onSwiped(e, this.state.originalX, this.state.originalY, current.x, current.y, delta.x, delta.y)
		this.setState({ originalX: 0, originalY: 0 })
	}

	getCurrentPosition = (touch) => {
		return {
			x: parseInt(touch.screenX, 10),
			y: parseInt(touch.screenY, 10)
		}
	}

	getDelta = (touch) => {
		return {
			x: parseInt(touch.screenX, 10) - this.state.originalX,
			y: parseInt(touch.screenY, 10) - this.state.originalY
		}
	}

	getModifiedProps = () => {
		const props = {
			...this.props,
			onTouchStart: this.onTouchStart,
			onTouchEnd: this.onTouchEnd,
			onTouchMove: this.onTouchMove
		}

		delete props.children
		delete props.onSwiping
		delete props.onSwiped
		delete props.onSwipedUp
		delete props.onSwipedDown
		delete props.onSwipedLeft
		delete props.onSwipedRight
		delete props.nodeName
		delete props.threshold

		return props
	}

	render() {
		const props = this.getModifiedProps()
		return React.createElement(
			QuickNav,
			props,
			this.props.children
		)
	}
}

SwipeEvents.defaultProps = {
	threshold: 10,
	nodeName: 'div'
}

SwipeEvents.propTypes = {
	children: PropTypes.any.isRequired,
	onSwiping: PropTypes.func,
	onSwiped: PropTypes.func,
	onSwipedUp: PropTypes.func,
	onSwipedDown: PropTypes.func,
	onSwipedLeft: PropTypes.func,
	onSwipedRight: PropTypes.func,
	nodeName: PropTypes.string,
	threshold: PropTypes.number,
}

export default SwipeEvents