import React from 'react';
import {AppRegistry,Text,View,StyleSheet,Dimensions,Image,TouchableHighlight,StatusBar} from 'react-native';
import {Grid,Row} from 'react-native-elements'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class First extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View>
          <View style={{marginTop:height*0.2}}>
            <Image source={require('images/Logo.png')} style={{alignSelf:'center'}}/>
          </View>
          <View style={{marginTop: 50}}>
            <Text style={{alignSelf: 'center', color:'#0ec0be',fontSize: 25, fontFamily: 'Muli-SemiBold' }}>Welcome</Text>
            <Text style={{alignSelf: 'center',color:'#0ec0be',fontSize: 25, fontFamily:'Muli-SemiBold' }}>To Coinstack</Text>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={{alignSelf:'center',color:'white', fontFamily: 'Muli-Regular'}}>Check out the currencies</Text>
            <Text style={{alignSelf:'center',color:'white', fontFamily: 'Muli-Regular'}}>you can invest in</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight style={{justifyContent:'center',width:width/2-2}} onPress={()=>this.props.navigator.push('login')}>
            <Text style={{fontSize:20, textAlign:'center', fontFamily: 'Nunito-SemiBold'}}>LOG IN</Text>
          </TouchableHighlight>
          <View style={{backgroundColor:'#15193c', height: '60%',width: 1,alignSelf:'center'}}>
          </View>
          <TouchableHighlight style={{justifyContent:'center',width:width/2-2}} onPress={(e)=>this.props.navigator.push('signup')}>
            <Text style={{fontSize:20, textAlign:'center', fontFamily: 'Nunito-SemiBold'}}>SIGN UP</Text>
          </TouchableHighlight>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#15193c',
  },
  footer: {
    backgroundColor: '#0ec0be',
    height: height*0.1,
    flexDirection: 'row',
  }
});
