import React, { useState } from 'react';

import './Card.scss';

const Card = props => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className='card' onClick={handleClick}>
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

  function handleClick() {
    setFlipped(!flipped);
  }
};

export default Card;
