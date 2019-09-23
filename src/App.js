import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router';
import Overlay from './Overlay';
import MainContainer from './MainContainer';
import GameContainer from './GameContainer';
import store from './store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='memory-app'>
        <Router className='router'>
          <Overlay />
          <Route path='/' exact component={MainContainer} />
          <Route path='/game' component={GameContainer} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
