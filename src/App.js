import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import Overlay from './Overlay';
import MainContainer from './MainContainer';
import GameContainer from './GameContainer';
import store from './store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='memory-app'>
        <Overlay />
        <Router className='router'>
          <MainContainer path='/' />
          <GameContainer path='/game' />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
