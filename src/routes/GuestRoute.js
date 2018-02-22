import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const GuestRoute = ({
	fetching,
	isAuthenticated,
	component: Component,
	...rest
}) =>
	fetching ? null : (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to="/dashboard" />
				)
			}
		/>
	)

const mapStateToProps = state => ({
	isAuthenticated: state.loginReducer.logged_in,
	fetching: state.loginReducer.fetching
})

export default connect(mapStateToProps)(GuestRoute)
