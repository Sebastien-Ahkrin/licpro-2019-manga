import React, { Component } from 'react'
import { List } from './../List'
import { Form } from './../Form'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <List/>
        <Form/>
      </div>
    )
  }

}

export default App
