import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store as originalStore } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker'

import { fetchUserSuccess } from './components/Authentication/Login/actions'
import setAuthorizationHeader from './utils/setAuthorizationHeader'

import MainLayout from './mainLayout/mainLayout'
import store from './redux/store.jsx'
import { client } from './apollo'
// import './normalise.css'

if (localStorage.token) {
	setAuthorizationHeader(localStorage.token, localStorage.refreshToken)
	axios
		.get('http://localhost:5000/v1/api/auth/current_user')
		.then(({ data: { result } }) => {
			store.dispatch(fetchUserSuccess(result))
		})
		.catch(console.log)
}

render(
	<Router>
		<Provider store={store}>
			<ApolloProvider client={client}>
				<MainLayout />
			</ApolloProvider>
		</Provider>
	</Router>,
	document.querySelector('#root')
)
registerServiceWorker()
