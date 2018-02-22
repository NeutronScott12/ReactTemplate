import React, { Component } from 'react'

import DashBoardContainer from '../container'

class DashBoardLayout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<DashBoardContainer />
			</div>
		)
	}
}

export default DashBoardLayout
