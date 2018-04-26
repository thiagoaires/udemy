'use strict'

import React from 'react'

const Title = ({name, lastname}) => (
  <h1>Ola {`${name} com sobrenome ${lastname}!`}</h1>
)
Title.defaultProps = {
  name: 'desconhecido',
  lastname: 'indigente'
}
// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },
//   render: function () {
//     return (
//       <div className='container' data-id='1'>
//         <h1>Olá {this.props.name + ' ' + this.props.lastname.first}!</h1>
//       </div>
//     )
//   }
// })

export default Title
