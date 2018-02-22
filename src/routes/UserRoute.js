import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
)

const mapStateToProps = state => ({
	isAuthenticated: state.loginReducer.logged_in
})

export default connect(mapStateToProps)(UserRoute)
