import React, { Component } from 'react'
import { withFormik } from 'formik'
import { compose, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginForm from '../views/LoginForm'
import { LoginMutation } from '../graphql'
import {
	fetchUserRequest,
	fetchUserFailure,
	fetchUserSuccess
} from '../actions'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<LoginForm {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	state
})

const mapDispatchToProps = dispatch => ({
	fetchUser: () => dispatch(fetchUserRequest()),
	fetchFailure: () => dispatch(fetchUserFailure()),
	fetchSuccess: user => dispatch(fetchUserSuccess(user))
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	graphql(LoginMutation),
	withFormik({
		mapPropsToValues: () => ({ email: '', password: '' }),
		validate(values, props) {},
		handleSubmit: async (
			values,
			{
				props: {
					mutate,
					history,
					fetchUser,
					fetchFailure,
					fetchSuccess
				},
				setSubmitting,
				setErrors,
				resetForm
			}
		) => {
			// fetchUser()
			const response = await mutate({
				variables: {
					email: values.email,
					password: values.password
				}
			})

			const {
				data: {
					login: {
						ok,
						token,
						refreshToken,
						errors,
						user: { username, email }
					}
				}
			} = response

			console.log('RESPONSE', response)

			if (ok) {
				fetchSuccess({ username, email, token })
				localStorage.setItem('token', token)
				localStorage.setItem('refreshToken', refreshToken)
				history.push('/dashboard')
			} else {
				fetchFailure()
				console.log(errors)
				setErrors(errors)
				resetForm()
			}
			// setSubmitting(false)
			// history.push('/')
		}
	})
)(Login)
