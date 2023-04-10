import React from 'react'

const Element = ({heading, number, graph}) => {
  return (
    <div className='d-flex justify-content-between'>
        <span>{heading}</span>
        <span>{number}</span>
        <span style={{width:'60px', height:'15px', backgroundColor:'#cccccc'}}>{graph}</span>
    </div>
  )
}

export default Element