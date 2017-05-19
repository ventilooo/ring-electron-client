import React from 'react';

const Logo = ((props) => {
  return (
    <div className='logo'>
      <img src={props.logoPath} width={props.width} alt='logo' />
    </div>
  );
});

export default Logo;
