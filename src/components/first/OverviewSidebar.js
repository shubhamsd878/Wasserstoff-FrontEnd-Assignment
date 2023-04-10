import DetailCard from './OverviewSidebar/DetailCard'
import ChartCard from './OverviewSidebar/ChartCard'
import { FaGreaterThan } from 'react-icons/fa'
import { RiBarChartFill } from 'react-icons/ri'
import { RiVipCrownLine } from 'react-icons/ri'
import { BiTrendingUp } from 'react-icons/bi'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './OverviewSidebar.scss'

const OverviewSidebar = () => {
  const active_users_chart = (<CircularProgressbar value={27} text={`${27}%`} strokeWidth={5} styles={buildStyles({
    pathColor: "blue",
    textColor: "black",
    textSize: "1.8rem",
    fontWeight: "700"
  })
  } />)


  const new_users_chart = (<CircularProgressbar value={67} text={`${67}%`} strokeWidth={5} styles={buildStyles({
    pathColor: '#18AB39',
    textColor: "black",
    textSize: "1.8rem",
    fontWeight: "700"
  })} />)


  return (
    <div className='left'>
      <h4 className='top-statement my-3'>WSTF FRONT-END HACKATHON</h4>

      <div className='my-4' >
        <h6 className='d-inline'>All Users</h6><p className='all-users-detail d-inline fw-bold'>&nbsp;&nbsp;&nbsp;&nbsp; DETAIL  &nbsp;<FaGreaterThan /></p>
        <h1 className='all-users-number'>2,431,340</h1>
      </div>

      <br />
      {/* DetailCard are left side cards */}
      <div className='left-detail-cards my-3'>

        <DetailCard Icon={<div className='left-icon-div earning-icon-div'><BiTrendingUp className='left-icon' size={26} color={'white'} /></div>} heading={'Total Earning'} number={'540,549'} />
        <DetailCard Icon={<div className='left-icon-div sales-icon-div'><RiVipCrownLine className='left-icon' size={26} color={'white'} /> </div>} heading={'Sales'} number={'1,205,667'} />
        <DetailCard Icon={<div className='left-icon-div purchase-icon-div'><RiBarChartFill className='left-icon' size={26} color={'white'} /> </div>} heading={'Purchase'} number={'48,430,039'} />
      </div>

      <br />

      <div className='d-flex my-3' >
        <ChartCard chart={active_users_chart} heading={'Active Users'} number={'92,980'} percentage={27} />
        <ChartCard chart={new_users_chart} heading={'New Users'} number={'22,652'} percentage={67} />
      </div>

    </div>
  )
}

export default OverviewSidebar