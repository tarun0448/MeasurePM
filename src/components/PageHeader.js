import React from 'react'
import CustomButton from './Button';
import plusCircleIcon from "../assets/plus-circle.svg"
import eyeIcon from "../assets/eye.svg"


const PageHeader = () => {
    const handleButtonClick = () => {
        // Handle button click action
        console.log('Button clicked');
    };

    return (    
        <div className='page-header'>
            <div>
                <div className='page-heading'>Dashboard</div>
                <p className='page-desc'>Welcome to MeasurePM</p>
            </div>
            <div className='page-header-buttons'>
                <CustomButton text="Add appointment" type="primary" iconLeft iconSrc={plusCircleIcon} onClick={handleButtonClick} />
                <CustomButton text="Customize view" type="secondary" iconLeft iconSrc={eyeIcon} onClick={handleButtonClick} />
            </div>
        </div>

    )
}

export default PageHeader