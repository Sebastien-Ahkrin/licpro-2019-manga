import React, { Component } from 'react'
import axios from 'axios'

import { api } from '../../../config'

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

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    transform = value => ((typeof parseInt(value, 10) === 'number') && (value <= 9) ? `0${ (value <= 0 ? 1 : value) }` : value.replace(/[ ]/g, '-'))

    handleChange (event) {
        const name = event.target.id
        const value = event.target.value

        if (name === "serie") {
            this.setState({ serie : value })
        }
        if (name === "season") {
            this.setState({ season : value })
        }
        if (name === "episode") {
            this.setState({ episode : value })
        }
        if (name === "grade") {
            this.setState({ grade : value })
        }
    }

    handleSubmit (event) {        
        event.preventDefault()
        axios.post(`${ api }/episodes`, {
            "name": this.state.serie,
            "grade": this.state.grade,
            "code": "S" + this.transform(this.state.season) + "E" + this.transform(this.state.episode)
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    render () {
        return (
            <div className='Form'>
                <form onSubmit={ this.handleSubmit }>
                    <div className='form-group'>
                        <label htmlFor='serie' className='label-form'>Série</label>
                        <input type='text' required='required' className='form-control' id='serie' placeholder='Série' value={ this.state.serie } onChange={ this.handleChange }></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='season' className='label-form'>Saison</label>
                        <input type='number' required='required' min='1' className='form-control' id='season' placeholder='Saison' value={ this.state.season } onChange={ this.handleChange }></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='episode' className='label-form'>Épisode</label>
                        <input type='number' required='required' min='1' className='form-control' id='episode' placeholder='Épisode' value={ this.state.episode } onChange={ this.handleChange }></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='grade' className='label-form'>Note</label>
                        <input type='number' required='required' min='0' max='10' step='0.5' className='form-control' id='grade' placeholder='Note' value={ this.state.grade } onChange={ this.handleChange }></input>
                    </div>
                    <button type='submit' formMethod='post' className='btn btn-primary' id='watched-btn'>Watched</button>
                </form>
            </div>
        )
    }
}

export default Form