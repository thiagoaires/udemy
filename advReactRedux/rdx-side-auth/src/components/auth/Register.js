import React, {Component} from 'react'
import { reduxForm, Field} from 'redux-form'

import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../actions'

class Register extends Component{
  render(){
    return (
      <div>
        <h2>Registro</h2>
        <form on>
          <fieldset>
            <Field
              name='phone'
              type='text'
              component='input'
            /><button type='submit'>Enviar</button>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default compose(
  reduxForm({form: 'register'}),
  connect(null, actions)
)(Register)