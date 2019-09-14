import React, { useState, useEffect } from 'react';

import './Card.scss';

const Card = props => {
  const [flipped, setFlipped] = useState(false);
  const propsFlipped = props.flipped;

  // If component is flipped from outside
  useEffect(() => {
    if (typeof propsFlipped !== 'undefined') setFlipped(propsFlipped);
  }, [propsFlipped]);

  return (
    <div className='card-component'>
      <div className={'card-inner' + (flipped ? ' flipped' : '')}>
        <div className='card-front'></div>
        <div
          className='card-back'
          style={{
            backgroundImage:
              "url('assets/images/cards/onecolor/" + props.cardId + ".jpg')"
          }}></div>
      </div>
    </div>
  );
};

export default Card;
