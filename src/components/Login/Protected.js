import React, { PureComponent } from 'react'

class Protected extends PureComponent {

	render() {
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		)
	}
}

export default Protected
