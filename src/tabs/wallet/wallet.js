import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard, Alert, Dimensions,ScrollView} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Wallet extends Component{
  render() {
    return (
      <ScrollView style={{backgroundColor:'#15193c',flex:1}}>

        <View style={{backgroundColor:'#0ec0be',height:250}}></View>

      <View style={{backgroundColor:'#11142e',height:300,marginLeft:20,marginRight:20,marginTop:-200,borderRadius:5,alignItems:'center'}}>
        <Text style={{color:'#0ec0be',fontFamily:'Nunito-SemiBold',marginTop:20,fontWeight:'700',fontSize:15}}>ALL INVESTMENTS</Text>
        <Text style={{color:'white',marginTop:40,fontSize:35,fontFamily:'Nunito-Light',textAlign:'center'}}>$ 1057</Text>
      <Text style={{color:'#0ec0be',fontFamily:'Nunito-Light',marginTop:5,fontWeight:'700',fontSize:15}}>+120$ (+10.02%) TODAY</Text>
      </View>

      <View style={{alignItems:'center',marginTop:20}}>
        <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Bitcoin</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>x10</Text>
            </View>

            <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'50%'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+10$</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>+10.0.8%</Text>
            </View>

          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Dogecoin</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>x100</Text>
            </View>

            <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'50%'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+5.09$</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>+5.02%</Text>
            </View>

          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Monero</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>x10</Text>
            </View>

            <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'50%'}}>
              <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+10$</Text>
            <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>+10.0.8%</Text>
            </View>

          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight underlayColor='transparent' style={{backgroundColor:'#0ec0be',marginLeft:20,marginRight:20,marginTop:50,height:45,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:'Nunito-bold',color:'#15193c',fontSize:13,letterSpacing:1.3}}>ADD MONEY</Text>
      </TouchableHighlight>

      <TouchableHighlight underlayColor='transparent' style={{backgroundColor:'#15193c',marginLeft:20,marginRight:20,marginTop:20,marginBottom:20,height:45,borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#0ec0be',}}>
        <Text style={{fontFamily:'Nunito-bold',color:'#0ec0be',fontSize:13,letterSpacing:1.3}}>CASHOUT</Text>
      </TouchableHighlight>
      </ScrollView>
    )
  }

  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
