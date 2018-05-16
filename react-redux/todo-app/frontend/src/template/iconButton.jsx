// import React, {Component} from 'react'

// export default class iconButton extends Component{

//   render(){
//     return (
//       <div>
//         <button className='btn btn-primary'>
//           <i className={this.props.icone}></i>
//         </button>
//       </div>
//     )
//   }
// }

// funcao icone 

import React from 'react'

export default props => {

  if (props.hide) {
    return null
  } else {
    return(
      <button 
        className={'btn btn-' + props.style } 
        onClick={props.onClick}>
        <i className={props.icon}></i>
      </button>
    )
  }
}