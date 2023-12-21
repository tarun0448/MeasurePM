import React from 'react'
import ImageIcon from './ImageIcon'
import emptyChartLogo from "../assets/empty-chart.svg"

const EmptyChart = () => {
  return (
    <div className='empty-chart'>
        <ImageIcon src={emptyChartLogo} height={80} width={80}/>
        <p>Add filter to see the data</p>
    </div>
  )
}

export default EmptyChart;