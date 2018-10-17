import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component{
  render(){
    return (
      <div>
        <form action="">
          <fieldset>
            <label htmlFor="">E-mail</label>
            <Field
              name='email'
              type='text'
              component='input'
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Senha</label>
            <Field
              name='password'
              type='password'
              component='input'
            />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default reduxForm()(Signup)