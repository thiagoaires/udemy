import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Register extends React.Component{

  onRegister = formProps => {
    this.props.signin(formProps, () => this.props.history.push('/validacao'))
  }

  render(){

    const { handleSubmit } = this.props

    return (
      <div className='box-unlogged'>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit(this.onRegister)}>
          <fieldset>
            <p>
              <label htmlFor="">Telefone</label>
              <Field
                name='phone'
                type='text'
                component='input'
                autoComplete='none'
              />
            </p>
            <p>
              <label htmlFor="">E-mail</label>
              <Field
                name='email'
                type='text'
                component='input'
                autoComplete='none'
              />
            </p>
            <p>
              <label htmlFor="">Senha</label>
              <Field
                name='hashedPassword'
                type='password'
                component='input'
                autoComplete='none'
              />
            </p>
            <p>
              <label htmlFor="">Concorda com os termos?</label>
              <Field
                name='terms'
                type='checkbox'
                component='input'
                />
            </p>
            <button type='submit'>Enviar</button>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default compose(
  connect(null, actions),
  reduxForm({form: 'register'})
)(Register)