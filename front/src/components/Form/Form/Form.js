import React, { Component } from 'react'
import axios from 'axios'

import { api } from '../../../config'
import { List } from '../../List'

class Form extends Component {

    constructor () {
        super()
        this.state = {}
    }

    componentDidMount () {
        
    }

    handleSubmit (event) {
        console.log()
        axios.post(`${ api }/episodes`).then(() => {
            
        })
        event.preventDefault()
    }

    render () {
        return (
            <div className='Form'>
                <form onSubmit={ this.handleSubmit }>
                    <div className='form-group'>
                        <label for='serie'>Série</label>
                        <input type='text' className='form-control' id='serie' placeholder='Série'></input>
                    </div>
                    <div className='form-group'>
                        <label for='season'>Saison</label>
                        <input type='number' min='1' className='form-control' id='season' placeholder='Saison'></input>
                    </div>
                    <div className='form-group'>
                        <label for='episode'>Épisode</label>
                        <input type='number' min='1' className='form-control' id='episode' placeholder='Épisode'></input>
                    </div>
                    <button type='submit' formMethod='post' className='btn btn-primary'>Watched</button>
                </form>
            </div>
        )
    }
}

export default Form