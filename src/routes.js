import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native'

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
  createStackNavigator({
    Feed,
    New,
  }, {
      // In development to avoid on live-reload goto initial page, we can change initial route like bellow.
      // initialRouteName: 'New',
      defaultNavigationOptions: {
      // Icon colors
      headerTintColor: '#000',
      headerTitle: <Image style={ { marginHorizontal: 20 } } source={ logo } />,
      // Remove string back in iOS.
      headerBackTitle: null,
    },
    // Change the animation from right to left, to bottom to top.
    mode: 'modal'
  })
);
