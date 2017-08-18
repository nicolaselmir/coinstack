import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard, Alert, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class start extends Component{
  render() {
    return (
      <View style={{backgroundColor:'#15193c',flex:1}}>

        <View style={{backgroundColor:'#0ec0be',height:200}}></View>

    <View style={{backgroundColor:'#11142e',height:300,marginLeft:20,marginRight:20,marginTop:-130,borderRadius:5,alignItems:'center'}}>
      <Image style={{marginTop:40}} source={require('images/walleti.png')}/>

      <View style={{alignItems:'center'}}>
        <Text style={{color:'#0ec0be',marginTop:20,fontSize:25,fontFamily:'Nunito-SemiBold'}}>WELCOME</Text>
      <Text style={{color:'#0ec0be',marginTop:0,fontSize:25,fontFamily:'Nunito-SemiBold'}}>TO YOUR WALLET</Text>
      </View>
      </View>

      <View style={{alignItems:'center',color:'white',marginTop:40}}>
         <Text style={{color:'white',fontSize:15,fontFamily:'Nunito-SemiBold'}}>Here you can add withdraw funds,</Text>
       <Text style={{color:'white',marginTop:3,fontSize:15,fontFamily:'Nunito-SemiBold'}}>and manage your investments</Text>
      </View>

      <TouchableHighlight underlayColor='transparent' style={{backgroundColor:'#0ec0be',marginLeft:20,marginRight:20,marginTop:50,height:45,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:'Nunito-bold',color:'#15193c',letterSpacing:1.2}}>START INVESTING</Text>
      </TouchableHighlight>
      </View>
    )
  }

  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
