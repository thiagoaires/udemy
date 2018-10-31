import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Signup extends Component{

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/home')
    })
  }

  render(){

    const { handleSubmit } = this.props

    return (
      <div className='box-unlogged'>
        <h2>Login</h2>
        <div className='box-error'>
          {
            this.props.errorMessage
          }
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label htmlFor="">E-mail</label>
            <Field
              name='email'
              type='text'
              component='input'
              autoComplete='none'
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Senha</label>
            <Field
              name='password'
              type='password'
              component='input'
              autoComplete='none'
            />
          </fieldset>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form: 'signup'})
)(Signup)