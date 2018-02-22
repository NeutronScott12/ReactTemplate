import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { withFormik } from 'formik'
import { withRouter } from 'react-router-dom'

import RegisterForm from '../views/RegisterForm'
import { registerMutation } from '../graphql'

class RegisterContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <RegisterForm {...this.props} onSubmit={this.onSubmit} />
	}
}

export default compose(
	withRouter,
	graphql(registerMutation),
	withFormik({
		mapPropsToValues: () => ({ email: '', username: '', password: '' }),
		validate(values, props) {
			const errors = {}
			if (!values.email) {
				errors.email = 'Email Required'
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = 'Invalid email adress'
			}
			return errors
		},
		async handleSubmit(
			values,
			{ props: { history, mutate }, setSubmitting, setErrors }
		) {
			try {
				const response = await mutate({
					variables: {
						email: values.email,
						username: values.username,
						password: values.password
					}
				})
				console.log(response)
				const { data: { register: { ok, errors } } } = response

				if (ok) {
					history.push('/login')
				} else {
					setSubmitting(false)
					setErrors(errors)
				}
			} catch (error) {
				console.log(error)
			}
		}
	})
)(RegisterContainer)
