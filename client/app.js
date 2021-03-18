import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ReactDOM from 'react-dom'
import store from './store'
import Table from './components/Table'
import Navbar from './components/Navbar'

import './style.css'

class Main extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact to="/" component={Table} />
					<Route exact to="/notfound" component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('app')
)
