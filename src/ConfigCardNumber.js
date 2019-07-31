import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCardCount } from './actions/config';
import { switchOverlay } from './actions/ui';

import './ConfigCardNumber.scss';

const ConfigCardNumber = props => {
  // Default config values
  const config = {
    defaultCount: props.cardCount,
    values: [1, 2, 3, 4, 5, 6, 7, 8]
  };

  // State: cards open / closed
  const [stateCards, setStateCards] = useState(false);

  useEffect(() => {
    if (props.overlayVisible === false) {
      if (stateCards === true) {
        setStateCards(false);
      }
    }
  }, [props.overlayVisible, stateCards]);

  return (
    <div className='config-card-number'>
      <div className='cards'>
        <div
          className='card base'
          onClick={() => {
            setStateCards(!stateCards);
            props.switchOverlay(!props.overlayVisible);
          }}>
          {config.defaultCount}
        </div>
        {createNumberCards()}
      </div>
    </div>
  );

  function createNumberCards() {
    let cards = [];

    for (let i = 0; i < 8; i++) {
      cards.push(
        <div
          onClick={e => handleNumberClick(config.values[i])}
          className={'card number' + (stateCards ? ' visible' : '')}
          style={stateCards ? createTransform(i) : null}
          key={i}>
          {config.values[i]}
        </div>
      );
    }

    return cards;
  }

  function handleNumberClick(number) {
    props.setCardCount(number);
    setStateCards(false);
    props.switchOverlay(false);
  }

  function createTransform(cardIndex) {
    let transform = {};

    switch (cardIndex) {
      case 0:
        transform = { transform: 'translate(-104px,-62px)' };
        break;
      case 1:
        transform = { transform: 'translate(0,-62px)' };
        break;
      case 2:
        transform = { transform: 'translate(104px,-62px)' };
        break;
      case 3:
        transform = { transform: 'translate(-104px,0)' };
        break;
      case 4:
        transform = { transform: 'translate(104px,0)' };
        break;
      case 5:
        transform = { transform: 'translate(-104px,62px)' };
        break;
      case 6:
        transform = { transform: 'translate(0,62px)' };
        break;
      case 7:
        transform = { transform: 'translate(104px,62px)' };
        break;

      default:
        break;
    }

    return transform;
  }
};

const mapStateToProps = state => {
  return {
    cardCount: state.config.cardCount,
    overlayVisible: state.ui.overlayVisible
  };
};

const mapDispatchToProps = {
  setCardCount,
  switchOverlay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigCardNumber);
