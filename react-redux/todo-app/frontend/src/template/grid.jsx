import React, {Component} from 'react'

export default class Grid extends Component{
  toCssColumn(colunas){
    let numeroColunas = colunas ? colunas.split(' ') : []
    let classes = ''

    if(numeroColunas[0]) classes += `col-xs-${numeroColunas[0]}`
    if(numeroColunas[1]) classes += ` col-sm-${numeroColunas[1]}`
    if(numeroColunas[2]) classes += ` col-md-${numeroColunas[2]}`
    if(numeroColunas[3]) classes += ` col-lg-${numeroColunas[3]}`

    return classes
  }
  render () {
  const gridClasses = this.toCssColumn(this.props.cols || 12)
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
  
}