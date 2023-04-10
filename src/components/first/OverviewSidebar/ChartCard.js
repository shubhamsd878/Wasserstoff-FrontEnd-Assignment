import React from 'react'

const ChartCard = ({ chart, heading, number }) => {
    return (
        <div className='d-flex me-4'>
            {chart}
            <div className='chart-card-text d-flex flex-column mx-3' >
                <h5 className='my-0'>{number}</h5>
                <p className='chart-card-footer'>{heading}</p>
            </div>
        </div>
    )
}

export default ChartCard