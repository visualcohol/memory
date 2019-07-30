import React from 'react';
import ConfigCardNumber from './ConfigCardNumber';

import './MainConfig.scss';

const MainConfig = () => {
  return (
    <div className='main-config'>
      <h3>With this many cards</h3>
      <ConfigCardNumber />
    </div>
  );
};

export default MainConfig;
