import React, { Component } from 'react'
import './App.css'

import Default from './../Default/Default'
import NoMatch from './../NoMatch/NoMatch'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {

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

export default App
