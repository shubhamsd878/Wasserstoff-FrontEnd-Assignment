import React from 'react'
import {VscTriangleUp} from 'react-icons/vsc'

const Center = ({ heading, earning, percentage }) => {
  return (
    <div className='mt-3'>
      {/* NOTE: size of p & h2 were changed in css file: Sidebar.scss */}
      <p style={{ fontSize: "15px", color:'#C8BCFF' }}>{heading}</p>
      <h2 className='d-inline text-muted' style={{  color: "#ffffff" }}>{earning} </h2> 
        <p className='d-inline' style={{fontSize:'0.8rem',color:'#00ff08'}}><VscTriangleUp size={16}/>{percentage}%</p>
      <p className='text-muted mb-3' style={{ fontSize: "10px", color:'#C8BCFF' }}>Compared to $21,490 last year</p>
    </div>
  )
}

export default Center