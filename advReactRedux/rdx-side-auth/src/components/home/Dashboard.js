import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Dashboard extends React.Component{

  listGroups = async () => {

    const {idGroup} = this.props.match.params

    const listMembers = await axios.get(`https://gruposocial-api.herokuapp.com/api/groups/${idGroup}`)

    const {name, _id, members} = listMembers.data
    this.props.loadGroupMembers({name, _id}, members)

  }

  componentDidMount = () => this.listGroups()

  render(){

    const {name, _id} = this.props.nameGroup
    const {groupMembers} = this.props

    return(
      <div>
        { <h2>Dashboard: {name}</h2> }
        <div className='container-dashboard'>

          <div>

            <h3>Acesso Rapido</h3>

            {
              <React.Fragment>
                <Link className='button' to={`/home/events/${_id}`}>Evento</Link>
                <Link className='button' to={`/home/subgroups/${_id}`}>Sub-grupo</Link>
              </React.Fragment>
            }

          </div>

          <div>

            <h4>Lista de Membros</h4>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Status</th>
                  <th>Funçao</th>
                </tr>
              </thead>
              <tbody>
                {groupMembers.map((membro, index) => (
                  <tr key={index}>
                    <td>{membro.name}</td>
                    <td>{membro.role}</td>
                    <td>{membro.info}</td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nameGroup: state.groups.nameGroup,
    groupMembers: state.groups.groupMembers
  }
}

export default connect(mapStateToProps, actions)(Dashboard)