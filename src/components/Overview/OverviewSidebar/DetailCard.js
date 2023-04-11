import React from 'react'

const DetailCard = ({Icon, heading, number}) => {
  return (
    <div className='d-flex align-items-center my-3'>
        <div className='detail-card-icon'>
          {Icon}
        </div>
        <div className='d-flex flex-column mx-3' >
            <p className='detail-card-heading text-muted'>{heading}</p>
            <p className='detail-card-number'>{number}</p>
        </div>
    </div>
  )
}

export default DetailCard