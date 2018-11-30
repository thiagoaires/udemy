import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

const validate = values => {
  const errors = {}
  if (!values.phone) (errors.phone = 'nao pode ser vazio')
}

class Signup extends React.Component{

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/home')
    })
  }

  render(){

    const { handleSubmit } = this.props

    return (
      <div className='box-unlogged'>
        <h2>Acesse o Grupo Social</h2>
        <div className='box-error'>
          {
            this.props.errorMessage
          }
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
              <label htmlFor="">Senha</label>
              <Field
                name='hashedPassword'
                type='password'
                component='input'
                autoComplete='none'
              />
            </p>
            <button type='submit'>Login</button>
          </fieldset>
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
  reduxForm({
    form: 'signup',
    validate
  })
)(Signup)