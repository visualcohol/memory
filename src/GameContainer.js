import React from 'react';

import CardMatrix from './CardMatrix';

import './GameContainer.scss';

const GameContainer = () => {
  return (
    <div className='game-container'>
      {/* [12, 16, 20, 25, 30, 36, 64, 100] */}
      <div className='info'>info</div>
      <CardMatrix count={100} height={500} />
    </div>
  );
};

export default GameContainer;
