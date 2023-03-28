import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainPage from './src/pages/Main';
import MindPage from './src/pages/Mind';
import {MainStack} from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={MainPage} />
        <MainStack.Screen name="Mind" component={MindPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
