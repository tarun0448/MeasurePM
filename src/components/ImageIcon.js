import React from 'react';
import PropTypes from 'prop-types';

const ImageIcon = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

ImageIcon.propTypes = {
  src: PropTypes.string.isRequired, // Image source URL
  alt: PropTypes.string.isRequired, // Alt text for accessibility
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default ImageIcon;
