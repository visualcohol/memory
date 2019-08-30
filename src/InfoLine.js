import React from 'react';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line'>
      <div className='left'>
        Found 0 pairs out of {props.cardCount / 2} possible
      </div>
      <div className='right'>
        <div className='timer'>
          {new Date(props.time).toISOString().substr(14, 5)}
        </div>
        <div
          className={'pause link' + (props.timePaused ? ' paused' : '')}
          onClick={pauseTime}>
          Pause
        </div>
        <div className='new-game link'>New game</div>
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
};

export default InfoLine;
