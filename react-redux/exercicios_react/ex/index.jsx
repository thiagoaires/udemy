import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <div>
    <ClassComponent value='Componente classe'>
      Children do Componente
    </ClassComponent >
  </div>
, document.getElementById('app'))

