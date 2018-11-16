import React from 'react'

class Dashboard extends React.Component{

  componentDidMount = () => console.log('montou dash')

  render(){
    return(
      <div>
        Dashboard
        <h2>Nome do Grupo</h2>
        <h3>Acesso Rapido</h3>
        <button>+ Evento</button>
        <button>+ Subgrupo</button>
        <h4>Planos</h4>
        <table>
          <thead>
            <tr>
              <th>Usuários</th>
              <th>Unidades</th>
              <th>Dependentes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard