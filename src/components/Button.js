import React from 'react';
import PropTypes from 'prop-types';
import ImageIcon from './ImageIcon';

const CustomButton = ({ text, iconSrc, onClick, disabled, iconLeft, iconRight, type}) => {

  let buttonClasses = 'border border-1 border-solid ';
  switch (type) {
    case 'primary':
        buttonClasses += 'bg-brand-600 text-primary-white border-brand-600 hover:bg-brand-700 hover:border-brand-700 focus:bg-brand-600 focus:shadow-bs-focus-primary disabled:border-gray-light-200 disabled:bg-gray-light-100 disabled:text-gray-400'
      break;
    case 'secondary':
      buttonClasses += 'bg-primary-white text-gray-light-700 shadow-bs-gray-2 border-gray-light-300 hover:bg-gray-light-50 hover:border-gray-light-300 hover:text-gray-light-800 focus:shadow-bs-focus-gray disabled:bg-primary-white disabled:text-gray-light-400 disabled:border-gray-light-200'
      break;
    case 'destructive':
      buttonClasses += 'bg-primary-white text-gray-light-700 border-gray-light-300 hover:bg-gray-light-50 hover:border-gray-light-300 hover:text-gray-light-800 focus:shadow-bs-focus-error disabled:bg-primary-white disabled:text-gray-light-400 disabled:border-gray-light-200'
      break;
    default:
      buttonClasses += 'bg-primary-white text-gray-light-700 border-gray-light-300 hover:bg-gray-light-50 hover:border-gray-light-300 hover:text-gray-light-800 focus:shadow-bs-focus-error disabled:bg-primary-white disabled:text-gray-light-400 disabled:border-gray-light-200'
      break;
  }

  return (
    <button
      className={`custom-button ${buttonClasses ? buttonClasses : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconSrc && iconLeft && <ImageIcon src={iconSrc} alt="Button Icon" width={20} height={20} />} {/* Display image if available */}
      <span>{text}</span>
      {iconSrc && iconRight && <ImageIcon src={iconSrc} alt="Button Icon" width={20} height={20}/>} {/* Display image if available */}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string, // Color name (e.g., 'red', 'blue', etc.)
  icon: PropTypes.node, // JSX element for icon
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomButton;
