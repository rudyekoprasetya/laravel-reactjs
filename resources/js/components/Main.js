import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//import component Content
import Content from './Content'
// //import component Add Data
import Add from './Add'
// //import component Edit Data
import Edit from './Edit'

class Main extends Component {
	render() {
		return (
			<Router className="App_container">
				<Switch>
					<Route exact path="/">
						<Content />
					</Route>
					<Route exact path="/add">
						<Add />
					</Route>
					<Route path="/edit/:id">
						<Edit />
					</Route>
				</Switch>
			</Router>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('app'))