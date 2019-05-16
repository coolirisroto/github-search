import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import RepositoryDetailScreen from '../screens/RepositoryDetailScreen'

import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      RepositoryDetail: RepositoryDetailScreen
    },
    {
        initialRouteName: "Home"
    }
    );

const App = createAppContainer(RootStack);

export default App;