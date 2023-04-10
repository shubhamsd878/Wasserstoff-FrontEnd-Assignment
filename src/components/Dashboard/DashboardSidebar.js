import React from 'react'
import './DashboardSidebar.scss'
import Card1 from './Sidebar/Card1'
import Card2 from './Sidebar/Card2'
import Card3 from './Sidebar/Card3'

//This page is divided into 3 components Card1, Card2 & Card3
const DashboardSidebar = () => {
  return (
    <div className='sidebar '>
      <div className='ms-4'>
        <h3 className='my-3'>Design Faster</h3>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>  
    </div>
  )
}

export default DashboardSidebar