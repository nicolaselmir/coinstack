import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import {createRouter,NavigationProvider,StackNavigation,} from '@expo/ex-navigation';

import First from 'auth/first';
import Login from 'auth/login';
import Signup from 'auth/signup';
import mainTab from './src/main';



export default class coinstack extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('first')} />
      </NavigationProvider>
    );
  }
}

const Router = createRouter(() => ({
  first: () => First,
  login: () => Login,
  signup: () => Signup,
  mainTab:() => mainTab
}));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('coinstack', () => coinstack);
