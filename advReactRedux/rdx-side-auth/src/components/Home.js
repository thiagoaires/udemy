import React, { Component } from 'react'
import requireAuth from './requireAuth'

class Home extends Component{
  render(){
    return(
      <div>
        <h1>Bem vindo ao Grupo Social</h1>
        <h2>Usuario Autenticado no grupo social</h2>
      </div>
    )
  }
}

export default requireAuth(Home)