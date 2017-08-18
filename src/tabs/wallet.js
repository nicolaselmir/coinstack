import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard, Alert, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
import Start from './wallet/start';
import Main from './wallet/wallet';

export default class Wallet extends Component{

  constructor(props) {
   super(props);
   this.state = {
     isNew: false};
  }

  renderContent(){
    if (this.state.isNew == true) {
      return <Start/>
    }else {
      return <Main/>
    }
  }


  render() {
    return (
      <View style={{backgroundColor:'#15193c',flex:1}}>
        {this.renderContent()}
      </View>
    )
  }

  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
