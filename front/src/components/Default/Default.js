import React, { Component } from 'react'

import { List } from './../List/'

class Default extends Component {

  render() {
    return (
      <div className="Default">
        <div className="row">
          <div class="col-md-8">
            <List/>
          </div>
          <div class="col-md-4">

          </div>
        </div>
      </div>
    )
  }

}

export default Default
