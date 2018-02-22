import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

const LoginForm = ({
	handleSubmit,
	handleChange,
	handleBlur,
	values: { email, password }
}) => {
	return (
		<div>
			<Form size={'huge'}>
				<Form.Field>
					<Form.Input
						onChange={handleChange}
						onBlur={handleBlur}
						name="email"
						label="Email"
						placeholder="example@example.com"
						value={email}
					/>
				</Form.Field>
				<Form.Field>
					<Form.Input
						value={password}
						onChange={handleChange}
						onBlur={handleBlur}
						name="password"
						type="password"
						label="Password"
						placeholder="example123"
					/>
				</Form.Field>
				<Button onClick={handleSubmit}>Submit</Button>
			</Form>
		</div>
	)
}

LoginForm.propTypes = {
	values: PropTypes.shape({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired
	}),
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired
}

export default LoginForm
