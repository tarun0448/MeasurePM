import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './SidebarTab.css'; // Style file for the sidebar tab

const SidebarTab = ({ title, onClick, active, icon, path}) => {
  return (
    <li className={active ? 'tab active' : 'tab'} onClick={onClick}>
        <Link to={path}>
        {icon ? <img src={icon} alt={title}/> : ""}
        {title}
      </Link>
    </li>
  );
};

SidebarTab.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default SidebarTab;
