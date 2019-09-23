import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCards } from './actions/ui';
import { Link } from 'react-router-dom';
import MainConfig from './MainConfig';
import Button from './Button';

import './MainContainer.scss';
import { ReactComponent as IconCards } from './assets/images/icon_cards.svg';

const MainContainer = props => {
  const propsSetCards = props.setCards;

  useEffect(() => {
    // Resetting global cards state
    propsSetCards([]);
  }, [propsSetCards]);

  return (
    <div className='main-container-component'>
      <div className='wrapper'>
        <IconCards />
        <h1>Hi! Want to play a round of memory?</h1>
        <MainConfig />
        <Link to='/game'>
          <Button text='Lets go and play!' />
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setCards
};

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
