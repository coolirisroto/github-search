import React from 'react'
import HomeScreen from '../screens/HomeScreen'

import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
        initialRouteName: "Home"
    }
    );

const App = createAppContainer(RootStack);

export default App;