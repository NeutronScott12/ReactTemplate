import axios from 'axios'

export default (token = null, refreshToken = null) => {
	if (token) {
		axios.defaults.headers.common['x-token'] = `${token}`
		axios.defaults.headers.common['x-refresh-token'] = `${refreshToken}`
	} else delete axios.defaults.headers.common.authorization
}
