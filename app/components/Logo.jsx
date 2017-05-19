import React from 'react';

const Logo = ((props) => {
  return (
    <div className='logo'>
      <img src={props.logoPath} alt='logo' />
    </div>
  );
});

export default Logo;
