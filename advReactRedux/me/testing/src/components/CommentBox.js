import React, {Component} from 'react'

export default class CommentBox extends Component{

  state = {
    comment: ''
  }
  handleTextArea = (e) => {
    this.setState({comment: e.target.value})
  }

  handleSubmit = (e) => {

    e.preventDefault()

    // TODO - enviar form

    this.setState({comment: ''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleTextArea}/>
          <div>
            <button>Submit Coment</button>
          </div>
        </form>
      </div>
    )
  }
}