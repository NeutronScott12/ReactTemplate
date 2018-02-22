import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import constants from '../config/constants'

const httpLink = createHttpLink({ uri: constants.GRAPHQLENDPOINT })

const middlewareLink = setContext(() => ({
	headers: {
		'x-token': localStorage.getItem('token'),
		'x-refresh-token': localStorage.getItem('refreshToken')
	}
}))

const afterwareLink = new ApolloLink((operation, forward) => {
	return forward(operation).map(response => {
		const { response: { headers } } = operation.getContext()
		if (headers) {
			const token = headers.get('x-token')
			const refreshToken = headers.get('x-refresh-token')
			if (token) {
				localStorage.setItem('token', token)
			}
			if (refreshToken) {
				localStorage.setItem('refreshToken', refreshToken)
			}
		}
		return response
	})
})

const httpLinkWithMiddleware = afterwareLink.concat(
	middlewareLink.concat(httpLink)
)

const wsLink = new WebSocketLink({
	uri: constants.GRAPHQLSUBSCRIPTION,
	options: {
		reconnect: true,
		connectionsParms: {}
	}
})

const link = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query)
		return kind === 'OperationDefinition' && operation === 'subscription'
	},
	wsLink,
	httpLinkWithMiddleware
)

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
})
