import React from 'react';
import mpmTextLogo from "../assets/mpm-text-logo.svg"
import mpmMiniLogo from "../assets/mpm-mini-logo.svg"

import notificationBellIcon from "../assets/bell-01.svg"
import userImage from "../assets/user-image.svg"
import Avatar from '../components/Avatar';


const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <img className="mpm-icon" src={mpmMiniLogo} alt="mpm-logo" />
      </div>
      <div className='header-right'>
        <div className="header-main-logo">
          <img className="mpm-icon" src={mpmTextLogo} alt="mpm-logo" />
        </div>
        <div className="user-profile">
          <img className="notification-icon" src={notificationBellIcon} alt="notification" />
          <Avatar imageUrl={userImage} altText="User Profile Image" size="40px" />
        </div>
      </div>
    </div>
  )
}

export default Header;