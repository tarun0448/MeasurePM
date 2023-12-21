import React from 'react'
import ChartContainer from '../components/ChartContainer'
import PageHeader from '../components/PageHeader'

const Dashboard = () => {
  return (
    <>
      <PageHeader />
      <div className='dashboard-section'>
        <div className='dashboard-content'>
          <div className='dashboard-heading'>
            Business performance
          </div>
          <div className='dashboard-charts grid' >
            <ChartContainer chartHeading='Total revenue, cost and profit' chartType='vertial-bar' chartSpan='lg:col-start-1 lg:col-span-2 col-start-1 col-span-1'/>
            <ChartContainer chartHeading='Claims analysis' chartType='doughnut' chartSpan='col-span-1'/>
            <ChartContainer chartHeading='Revenue by client' chartType=''chartSpan='col-span-1'/>
            </div>
        </div>
        <div className='dashboard-content'>
          <div className='dashboard-heading'>
          Appointment Metrices
          </div>
          <div className='dashboard-charts grid'>
          <ChartContainer chartHeading='Appointment status analysis' chartType='stacked-bar' chartSpan='col-span-2 col-start-1 col-span-2'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
