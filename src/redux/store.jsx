import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'

import { reducers, rootEpics } from './combineReducer'

const logger = createLogger()

const middleware = [
	thunk,
	logger,
	routerMiddleware(history),
	createEpicMiddleware(rootEpics)
]

export default createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
)
