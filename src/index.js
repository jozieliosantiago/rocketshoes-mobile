import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Provider } from 'react-redux';

import React from 'react';
import { StatusBar } from 'react-native';
import store from './store';

import Routes from './routes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
