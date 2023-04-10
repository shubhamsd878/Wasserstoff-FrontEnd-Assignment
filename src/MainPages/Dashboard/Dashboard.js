import DashboardSidebar from '../../components/Dashboard/DashboardSidebar'
import DashboardMain from '../../components/Dashboard/DashboardMain'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className='second d-flex'>
        <DashboardSidebar />
        <DashboardMain />
    </div>
  )
}

export default Dashboard