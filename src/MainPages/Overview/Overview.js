import React from 'react'
import OverviewBottom from '../../components/Overview/OverviewBottom'
import OverviewSidebar from '../../components/Overview/OverviewSidebar'
import OverviewMain from '../../components/Overview/OverviewMain'
import './Overview.scss'

const Overview = () => {
  return (
    <div>
      <div className="d-flex ms-4">
        <OverviewSidebar />
        <OverviewMain />
      </div>
      {/* It is for rendering bottom barGraph on Main page */}
      <OverviewBottom />
      <br />
    </div>
  )
}

export default Overview