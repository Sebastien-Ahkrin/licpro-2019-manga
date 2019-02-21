import React, { Component } from 'react'

import { ActionContext } from './../../../context/'

import './Form.css'

class Form extends Component {

  constructor () {
    super()
    this.state = {
      serie : '',
      season : '',
      episode : '',
      grade : ''
    }
  }

  transform = value => ((typeof parseInt(value, 10) === 'number') && (value <= 9) ? `0${ (value <= 0 ? 1 : value) }` : value.replace(/[ ]/g, '-'))

  render () {
    return (
      <ActionContext.Consumer>
        { value => (
          <div>
            <div className="form-group">
              <label htmlFor='serie' className='label-form'>Série</label>
              <input type='text' required='required' className='form-control' id='serie' placeholder='Série'></input> 
            </div>
            <div className='form-group'>
              <label htmlFor='season' className='label-form'>Saison</label>
              <input type='number' required='required' min='1' className='form-control' id='season' placeholder='Saison'></input>
            </div>
            <div className='form-group'>
              <label htmlFor='episode' className='label-form'>Épisode</label>
              <input type='number' required='required' min='1' className='form-control' id='episode' placeholder='Épisode'></input>
            </div>
            <div className='form-group'>
              <label htmlFor='grade' className='label-form'>Note</label>
              <input type='number' required='required' min='0' max='10' step='0.5' className='form-control' id='grade' placeholder='Note'></input>
            </div>
            <button className='btn btn-primary' id='watched-btn' onClick={ () => this.onClick(value) }>Watched</button>
          </div>
        ) }
      </ActionContext.Consumer>
    )
  }

  onClick (consumer) {
    const { value: serie } = document.getElementById('serie')
    const { value: season } = document.getElementById('season')
    const { value: episode } = document.getElementById('episode')
    const { value: grade } = document.getElementById('grade')

    consumer.actions.add({ name: serie, grade: grade, episode: episode, code: `S${ this.transform(season) }E${ this.transform(episode) }` })
  }

}

export default Form