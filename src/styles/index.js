import styled from 'styled-components'

export const TopNav = styled.header`
	width: 100%;
	background: #dddddb;
	padding: 0.8rem;
	margin: 0;
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		from(#dddddb),
		to(#f4f4f4)
	);
	background-image: -webkit-linear-gradient(top, #dddddb, #f4f4f4);
	background-image: -moz-linear-gradient(top, #dddddb, #f4f4f4);
	background-image: linear-gradient(to bottom, #dddddb, #f4f4f4);
`

export const NavBrand = styled.h2`
	padding-left: 4rem;
`

export const Container = styled.div`
	width: 80%;
	margin: 1.5rem auto;
`

export const MainTheme = styled.body`
	background: #000;
	color: #fff;
`
