import React, { Component } from 'react'

import DashboardView from '../views'

class DashBoardContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<DashboardView />
			</div>
		)
	}
}

export default DashBoardContainer
