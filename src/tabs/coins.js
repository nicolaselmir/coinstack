import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard,ScrollView, Alert, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Coins extends Component{
  render() {
    return (
      <ScrollView style={{backgroundColor:'#15193c',flex:1}}>
        <View style={{backgroundColor:'#0ec0be',height:250}}></View>
        <View style={{backgroundColor:'#11142e',height:300,marginLeft:20,marginRight:20,marginTop:-200,borderRadius:5,alignItems:'center'}}>
          <Image source={require('images/coins_illustration.png')} style={{width:200, height:160, marginTop:20}}/>
          <Text style={{color:'#0ec0be',fontFamily:'Nunito-Regular',marginTop:20,fontSize:25}}>WELCOME</Text>
          <Text style={{color:'#0ec0be',fontFamily:'Nunito-Regular',fontSize:25}}>TO COINS PAGE</Text>
        </View>
        <Text style={{alignSelf:'center', fontFamily: 'Nunito-SemiBold', color: 'white', marginTop: 20}}>Here you can choose currency</Text>
        <Text style={{alignSelf:'center', fontFamily: 'Nunito-SemiBold', color: 'white'}}>to invest in</Text>
        <View style={{alignItems:'center',marginTop:20}}>
          <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Bitcoin</Text>
              </View>
              <View style={{flexDirection:'column', marginRight: 20, alignItems:'flex-end'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+1.05%</Text>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>2.060M</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#bd575b',justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginLeft:20,color:'#bd575b',fontFamily:'Nunito-Bold',fontSize:17}}>Dogecoin</Text>
              </View>
              <View style={{flexDirection:'column', marginRight: 20, alignItems:'flex-end'}}>
                <Text style={{marginLeft:20,color:'#bd575b',fontFamily:'Nunito-Bold',fontSize:12}}>-2,05%</Text>
                <Text style={{marginLeft:20,color:'#bd575b',fontFamily:'Nunito-Light',fontSize:12}}>230K</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Litecoin</Text>
              </View>
              <View style={{flexDirection:'column', marginRight: 20, alignItems:'flex-end'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+1.05%</Text>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>2.060M</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,borderColor:'#0ec0be',justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Monero</Text>
              </View>
              <View style={{flexDirection:'column', marginRight: 20, alignItems:'flex-end'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+1.05%</Text>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>2.060M</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='transparent' style={{height:78,backgroundColor:'#171a3d',borderWidth:1,width:"88%",borderRadius:5,marginTop:10,marginBottom: 20,borderColor:'#0ec0be',justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:17}}>Ripple</Text>
              </View>
              <View style={{flexDirection:'column', marginRight: 20, alignItems:'flex-end'}}>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Bold',fontSize:12}}>+1.05%</Text>
                <Text style={{marginLeft:20,color:'#0ec0be',fontFamily:'Nunito-Light',fontSize:12}}>2.060M</Text>
              </View>
            </View>
          </TouchableHighlight>



        </View>
      </ScrollView>
    )
  }

  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
