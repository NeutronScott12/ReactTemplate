import { useRoutes } from 'react-router-dom'
import { HomeContainer } from '../modules/Home/containers/HomeContainer'

export const SiteRouter = () => {
	return useRoutes([{ path: '/', element: HomeContainer }])
}
