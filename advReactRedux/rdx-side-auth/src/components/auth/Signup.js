import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component{

  onSubmit = formProps => {
    console.log(formProps)
  }

  render(){

    const { handleSubmit } = this.props

    return (
      <div>
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

// export default reduxForm({form: signup})(Signup)
export default reduxForm()(Signup)