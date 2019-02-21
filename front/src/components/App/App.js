import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Default from './../Default/Default'
import NoMatch from './../NoMatch/NoMatch'


import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ Default } />
            <Route component={ NoMatch } />
          </Switch>
        </Router>
      </div>
    )
  }

}
