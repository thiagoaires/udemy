import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Validate extends React.Component{

  onSubmit = formProps => {
    this.props.validateToken(formProps, () => {
      this.props.history.push('/login')
    })
  }

  render(){
    const { validation } = this.props

    return(
      <React.Fragment>
        <div className='box-unlogged'>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <h2>
              Validaçao
            </h2>
            <p>
              <label htmlFor="">Valide o telefone {!!validation && validation.phone} com o token enviado para seu celular</label>
              <Field
                name='tokenValidation'
                type='text'
                component='input'
                autoComplete='false'
              />
            </p>
            <p>
              <button type="submit">Validar Token</button>
            </p>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    validation: state.auth.validation
  }
}
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
      form: 'validate'
    })
    )(Validate)