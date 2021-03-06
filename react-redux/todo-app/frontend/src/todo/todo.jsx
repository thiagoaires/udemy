import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
      list: []
    }
    this.handlerAdd = this.handlerAdd.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerAdd(){
    console.log(this.state.description)
  }

  handlerChange(e){
    this.setState({...this.state, description: e.target.value})
  }
  render(){
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm 
          description={this.state.description}
          handlerAdd={this.handlerAdd} 
          handlerChange={this.handlerChange}
        />
        <TodoList />
      </div>
      
    )
  }
}