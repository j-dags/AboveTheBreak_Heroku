import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Table from './Table'
import Navbar from './Navbar'
import LeagueCharts from './LeagueCharts'
import './App.css'

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" render={() => <Table />} />
				<Route path="/stat-charts" render={() => <LeagueCharts />} />
				{/* <Route path="/load" component={Load} /> */}
			</Switch>
		</Router>
	)
}

export default App
