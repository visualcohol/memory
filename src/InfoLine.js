import React from 'react';
import { navigate } from '@reach/router';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line'>
      <div className='left'>Found 0 pairs out of {props.cardCount / 2}</div>
      <div className='right'>
        <div className='timer'>
          {new Date(props.time).toISOString().substr(14, 5)}
        </div>
        <div
          className={'pause link' + (props.timePaused ? ' paused' : '')}
          onClick={pauseTime}>
          Pause
        </div>
        <div className='new-game link' onClick={newGame}>
          New game
        </div>
      </div>
    </div>
  );

  function pauseTime() {
    if (props.timePaused) {
      props.pauseTime(false);
    } else {
      props.pauseTime(true);
    }
  }

  function newGame() {
    props.setTime(0);
    navigate('/');
  }
};

export default InfoLine;
