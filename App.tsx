import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import PermissionChecker from './src/common/RequestPermission';

const App = () => {
  // Ask Permission for accessing camera, media,etc
  // PermissionChecker();

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
