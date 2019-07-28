import React from 'react';
import MainConfig from './MainConfig';
import Button from './Button';

import './MainContainer.scss';
import { ReactComponent as IconCards } from './assets/images/icon_cards.svg';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <IconCards />
      <h1>Hi! Want to play a round of memory?</h1>
      <MainConfig />
      <Button text='Lets go and play!' />
    </div>
  );
};

export default MainContainer;
