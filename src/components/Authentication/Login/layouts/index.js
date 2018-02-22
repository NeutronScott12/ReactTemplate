import React, { Component } from 'react'

import Login from '../containers/Login'

class LoginLayout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<Login />
			</div>
		)
	}
}

export default LoginLayout
