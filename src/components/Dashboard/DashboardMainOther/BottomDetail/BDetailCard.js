import React from 'react'

const BDetailCard = ({icon, heading, number}) => {
  return (
    <div className='d-flex flex-column align-items-center  mx-5'>
        <div className='bottom-icon'> {icon}</div>
        <span> {heading}</span>
        <h1>{number}</h1> 
        {/* <p><small><b> {heading} </b></small></p>
        <h1>{number}</h1>  */}


    </div>
  )
}

export default BDetailCard