import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react'

const RegisterView = ({
	handleChange,
	handleSubmit,
	handleBlur,
	isSubmitting,
	values: { email, password, username },
	touched,
	errors
}) => {
	return (
		<Form onSubmit={handleSubmit} size="huge">
			{touched.email &&
				touched.username &&
				errors.length > 0 && (
					<div>
						{errors.map((error, i) => {
							return <div key={i}>{error.message}</div>
						})}
					</div>
				)}
			{touched.email && errors.email && <div>{errors.email}</div>}
			<Form.Field>
				<Form.Input
					label="Username"
					type="text"
					name="username"
					placeholder="abc123"
					onChange={handleChange}
					onBlur={handleBlur}
					value={username}
				/>
			</Form.Field>
			<Form.Field>
				<Form.Input
					label="Email"
					type="text"
					name="email"
					placeholder="abc123@example.com"
					onChange={handleChange}
					onBlur={handleBlur}
					value={email}
				/>
			</Form.Field>
			<Form.Field>
				<Form.Input
					label="Password"
					type="password"
					name="password"
					placeholder="example123"
					onChange={handleChange}
					onBlur={handleBlur}
					value={password}
				/>
			</Form.Field>
			<Button disabled={isSubmitting}>Register</Button>
		</Form>
	)
}

RegisterView.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	isSubmitting: PropTypes.bool.isRequired,
	touched: PropTypes.object.isRequired,
	values: PropTypes.shape({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired
	})
}

export default RegisterView
