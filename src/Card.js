import React, { useState, useEffect } from 'react';

import './Card.scss';

const Card = props => {
  const [flipped, setFlipped] = useState(false);
  const propsFlipped = props.flipped;

  useEffect(() => {
    if (typeof propsFlipped !== 'undefined') setFlipped(propsFlipped);
  }, [propsFlipped]);

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
    if (props.firstFlipped === null) {
      props.flipFirst(props.cardId);
    } else if (props.secondFlipped === null) {
      if (props.firstFlipped !== props.cardId) {
        props.flipSecond(props.cardId);
      }
    } else {
      console.log('all flipped');
    }

    setFlipped(true);
  }
};

export default Card;
