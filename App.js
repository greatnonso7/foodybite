import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from 'screens/auth';

function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

export default App;
