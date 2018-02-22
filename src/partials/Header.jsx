import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Menu, Segment } from 'semantic-ui-react'

import { logoutAction } from './action'

// import { TopNav, NavBrand } from '../styles'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { user: { logged_in }, logout, history } = this.props

		let authentication

		if (logged_in == false) {
			authentication = (
				<Fragment>
					<Menu.Item position="right">
						<Link to="/login">
							<h3>Login</h3>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/register">
							<h3>Register</h3>
						</Link>
					</Menu.Item>
				</Fragment>
			)
		} else {
			authentication = (
				<Fragment>
					<Menu.Item position="right">
						<Link to="/">
							<h3
								onClick={() => {
									history.push('/')
									logout()
								}}
							>
								Log out
							</h3>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/dashboard">
							<h3>Dashboard</h3>
						</Link>
					</Menu.Item>
				</Fragment>
			)
		}

		return (
			<Menu
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.856)',
					color: '#fff'
				}}
				size="massive"
				stackable
			>
				<Menu.Item header>
					<Link to="/">
						<h2>Main Site</h2>
					</Link>
				</Menu.Item>
				{authentication}
			</Menu>
		)
	}
}

const mapStatetoProps = state => ({
	user: state.loginReducer
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logoutAction())
})

export default compose(
	withRouter,
	connect(mapStatetoProps, mapDispatchToProps)
)(Header)
