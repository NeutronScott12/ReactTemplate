import gql from 'graphql-tag'

export const registerMutation = gql`
	mutation($email: String!, $username: String!, $password: String!) {
		register(email: $email, username: $username, password: $password) {
			ok
			errors {
				path
				message
			}
		}
	}
`
