import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'

import {
	FETCH_USER_FAILURE,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER,
	LOGOUT_USER_REQUEST,
	LOGOUT_USER_FULFILLED
} from '../../../config/types'

export const fetchUserRequest = () => ({
	type: FETCH_USER_REQUEST
})

export const fetchUserSuccess = user => ({
	type: FETCH_USER_SUCCESS,
	user
})

export const fetchUserFailure = () => ({
	type: FETCH_USER_FAILURE
})

export const loginUserEpic = action$ =>
	action$.ofType(FETCH_USER_REQUEST).map(payload => {
		console.log('Observable', payload)
	})

export const logoutUserEpic = action$ => {
	return action$
		.ofType(LOGOUT_USER_REQUEST)
		.map(payload => {
			localStorage.removeItem('token')
		})
		.mapTo({ type: LOGOUT_USER_FULFILLED })
}
