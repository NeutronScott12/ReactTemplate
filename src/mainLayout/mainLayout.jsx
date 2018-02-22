import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route, Link } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
import { Container } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

// import Routes from '../routes'
import TopNav from '../partials/Header'
import LoginLayout from '../components/Authentication/Login'
import MainPage from '../components/MainPage'
import RegisterLayout from '../components/Authentication/Register'
import DashBoardLayout from '../components/Dashboard'
import GuestRoute from '../routes/GuestRoute'
import UserRoute from '../routes/UserRoute'
import { MainTheme } from '../styles'

class MainLayout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		// const history = createHistory()
		return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>MainLayout</title>
				</Helmet>
				<TopNav />
				<Container text>
					<Switch>
						<GuestRoute path="/login" component={LoginLayout} />
						<UserRoute
							path="/dashboard"
							component={DashBoardLayout}
						/>
						<GuestRoute
							path="/register"
							component={RegisterLayout}
						/>
						<Route exact path="/" component={MainPage} />
					</Switch>
				</Container>
			</div>
		)
	}
}

MainLayout.propTypes = {}

export default MainLayout
