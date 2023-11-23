import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import { Provider } from 'react-redux';
import configureRedux from './src/redux/store';

const App = () => {
  const store = configureRedux();

  return (
    <Provider store={store}>
       <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </Provider>
   
  );
};

export default App;
