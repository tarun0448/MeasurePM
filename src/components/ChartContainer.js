import React from 'react'
import Dropdown from './Dropdown';
import DoughnutChart from './DoughnutChart';
import ImageIcon from './ImageIcon';
import dotVerticalIcon from "../assets/dots-vertical.svg"
import ButtonGroup from './ButtonGroup';
import EmptyChart from './EmptyChart';
import VerticalBarChart from './VerticalBarChart';
import StackedBarChart from './StackedBarChart';


const ChartContainer = ({ chartType, chartHeading, chartSpan }) => {

    const handleButtonClick = (label) => {
        console.log(`Button ${label} clicked`);
        // Perform actions based on the clicked button
    };

    const buttonGroupOptions = [
        { label: 'Last 3 month', value: 1, isActive: true },
        { label: 'Last 6 month', value: 2, isActive: false },
        { label: 'Year', value: 3, isActive: false },
        // Add more buttons as needed
    ];

    const options = [{ id: 1, label: "Option 1" }, { id: 2, label: "Option 2" }];

    const isChartDataAvaliable = true;
    let chartContent;
    switch (chartType) {
        case 'vertial-bar':
            isChartDataAvaliable ? (chartContent = <VerticalBarChart />) : (chartContent = <EmptyChart />);
            break;
        case 'doughnut':
            isChartDataAvaliable ? (chartContent = <DoughnutChart />) : (chartContent = <EmptyChart />);
            break;
        case 'stacked-bar':
            isChartDataAvaliable ? (chartContent = <StackedBarChart />) : (chartContent = <EmptyChart />);
            break;
        default:
            chartContent = <EmptyChart />;
    }

    return (
        <div className={`${chartSpan ? chartSpan : ''} chart-container`}>
            <div className="chart-container-top">
                <div className='w-full'>
                <div className='chart-header'>
                    <p>{chartHeading}</p>
                    <ImageIcon src={dotVerticalIcon} alt="Icon" width={20} height={20} />
                </div>
                <div className='chart-dropdown-options'>
                    <Dropdown title="Chosse client" options={options} />
                    <Dropdown title="Choose auth" options={options} />
                </div>
                </div>
                <div className="chart" >
                    {chartContent}
                </div>
            </div>
            <div className='chart-container-bottom '>
                <ButtonGroup buttonGroupOptions={buttonGroupOptions} onClick={handleButtonClick} />
            </div>
        </div>
    )
}

export default ChartContainer