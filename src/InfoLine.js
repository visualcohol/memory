import React from 'react';

import './InfoLine.scss';

const InfoLine = props => {
  return (
    <div className='info-line'>
      <div className='left'>Found 33 pairs out of 55</div>
      <div className='right'>
        <div className='timer'>
          {new Date(props.time).toISOString().substr(14, 5)}
        </div>
        <div className='pause link'>Pause</div>
        <div className='new-game link'>New game</div>
      </div>
    </div>
  );
};

export default InfoLine;
