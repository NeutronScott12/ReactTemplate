import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'

import loginReducer from '../components/Authentication/Login/reducer'
import {
	loginUserEpic,
	logoutUserEpic
} from '../components/Authentication/Login/actions'

export const reducers = combineReducers({
	fake: () => [], // placeholder so redux doesn't moan
	router: routerReducer,
	loginReducer
})

export const rootEpics = combineEpics(loginUserEpic, logoutUserEpic)
