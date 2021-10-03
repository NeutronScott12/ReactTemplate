import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { cache } from './cache'

const httpLink = createHttpLink({
	uri: 'https://countries.trevorblades.com/',
})

export const client = new ApolloClient({
	link: httpLink,
	cache,
})
