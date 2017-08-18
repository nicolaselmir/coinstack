import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard, Alert, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Coins extends Component{
  render() {
    return (
      <View style={{backgroundColor:'#15193c',flex:1}}>
        <Text>
          Coins
        </Text>
      </View>
    )
  }

  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
