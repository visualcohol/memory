import React from 'react';
import MainConfig from './MainConfig';

import './MainContainer.scss';
import { ReactComponent as IconCards } from './assets/images/icon_cards.svg';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <IconCards />
      <h1>Hi! Want to play a round of memory?</h1>
      <MainConfig />
    </div>
  );
};

export default MainContainer;
