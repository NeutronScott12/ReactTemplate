import React from 'react'
import { useGetContinentsQuery } from '../../../generated/graphql'

export const HomeContainer = () => {
	const { data, loading } = useGetContinentsQuery()

	return loading ? (
		<div>Loading...</div>
	) : (
		<div>
			<h2>Home Container</h2>
			{data?.continents.map((name) => (
				<p>{name}</p>
			))}
		</div>
	)
}
