import React from 'react';

const Avatar = ({ imageUrl, altText, size }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <img
      src={imageUrl}
      alt={altText}
      style={avatarStyle}
    />
  );
};

export default Avatar;
