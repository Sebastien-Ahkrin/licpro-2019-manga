import React, { Component } from 'react'

import { List } from './../List/'
import { Form } from './../Form/'

class Default extends Component {

  render() {
    return (
      <div className="Default">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-8">
              <List/>
            </div>
            <div className="col-md-4">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Default
