import React, { PureComponent } from 'react'

class Protected extends PureComponent {

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Protected
