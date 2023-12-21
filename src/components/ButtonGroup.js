import React from 'react';

const ButtonGroup = ({ buttonGroupOptions, onClick }) => {
  return (
    <div className="button-group">
      {buttonGroupOptions.map((buttonGroupOption, index) => (
        <button
          key={index}
          onClick={() => onClick(buttonGroupOption.label)}
          className={`button ${buttonGroupOption.isActive ? 'active' : ''}`}
        >
          {buttonGroupOption.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
