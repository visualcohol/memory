import React from 'react';
import { Provider } from 'react-redux';
import Overlay from './Overlay';
import MainContainer from './MainContainer';
import store from './store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='memory-app'>
        <Overlay />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
