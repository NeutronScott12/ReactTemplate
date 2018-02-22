import {
	FETCH_USER_FAILURE,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	LOGOUT_USER_REQUEST,
	LOGOUT_USER_FULFILLED
} from '../../../config/types'

export default (state = { logged_in: false }, action = {}) => {
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				fetching: true,
				logged_in: false
			}
		case FETCH_USER_FAILURE:
			return {
				...state,
				fetching: false,
				logged_in: false
			}
		case FETCH_USER_SUCCESS:
			return {
				...state,
				...action.user,
				fetching: false,
				logged_in: true
			}
		case LOGOUT_USER_REQUEST:
			return { pending: true }
		case LOGOUT_USER_FULFILLED:
			return {
				pending: false,
				logged_in: false
			}
		default:
			return state
	}
}
