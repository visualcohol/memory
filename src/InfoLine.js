import React from 'react';
import { navigate } from '@reach/router';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line'>
      <div className='left'>Found 0 pairs out of {props.cardCount / 2}</div>
      <div className='right'>
        <div className='new-game link' onClick={newGame}>
          New game
        </div>
      </div>
    </div>
  );

  function newGame() {
    props.setTime(0);
    navigate('/');
  }
};

export default InfoLine;
