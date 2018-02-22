import { LOGOUT_USER_REQUEST } from '../config/types'

export const logoutAction = () => ({
	type: LOGOUT_USER_REQUEST
})

// export const logoutEpic = action$ =>
// 	action$.ofType(LOGOUT_USER).map(payload => console.log(payload))
