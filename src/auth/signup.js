import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,TouchableHighlight,Dimensions,Navigator,Keyboard}
from 'react-native';
import {FormInput} from 'react-native-elements';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      imgSourceEmail: require('images/user.png'),
      imgSourceName: require('images/user.png'),
      imgSourcePassword: require('images/password.png'),
      ulColorEmail: '#3b3d5e',
      ulColorName: '#3b3d5e',
      ulColorPassword: '#3b3d5e',
      imgHeight: 95,
      backArrowHeight: 0,
      margintop: 30,
    }
  };
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidHide = () => {
    this.setState({imgHeight: 95, backArrowHeight: 0, margintop: 30});
  }
  _keyboardDidShow = () => {
    this.setState({imgHeight: 0, backArrowHeight:20 ,margintop: 0});
  }
  _onBlurEmail() {
    this.setState({imgSourceEmail: require('images/user.png'), ulColorEmail:'#3b3d5e'});
  }
 _onFocusEmail() {
   this.setState({imgSourceEmail: require('images/user_active.png'), ulColorEmail: '#0ec0be', imgHeight: 0,backArrowHeight:20});
  }
  _onBlurName() {
    this.setState({imgSourceName: require('images/user.png'), ulColorName:'#3b3d5e'});
  }
 _onFocusName() {
   this.setState({imgSourceName: require('images/user_active.png'), ulColorName: '#0ec0be'});
  }
  _onBlurPassword() {
    this.setState({imgSourcePassword: require('images/password.png'), ulColorPassword:'#3b3d5e'});
  }
 _onFocusPassword() {
   this.setState({imgSourcePassword: require('images/password_active.png'), ulColorPassword:'#0ec0be', imgHeight: 0,backArrowHeight:20});
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.form}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight underlayColor={'transparent'} style={{marginTop:7,marginLeft:20}} onPress={()=>{this.props.navigator.pop();Keyboard.dismiss()}}>
              <Image style={{height: 20}} source={require('images/BackArrow_active.png')}/>
            </TouchableHighlight>
            <Text style={{color:'#0ec0be', textAlign:'center', fontSize:25,marginLeft:width/2-99}}>SIGN UP</Text>
          </View>
          <Image source={require('images/Logo.png')} style={{alignSelf: 'center', marginTop: this.state.margintop, width: 95, height: this.state.imgHeight, }}/>
          <View style={{flexDirection: 'row', marginRight:20, marginLeft:20, marginTop: 20}}>
            <Image source={this.state.imgSourceName} style={{height: 15, width: 15,marginTop: 17 }}/>
            <FormInput
              style={styles.input}
              placeholder={'Name'}
              placeholderTextColor='#3b3d5e'
              onFocus={()=>this._onFocusName()}
              onBlur={()=>this._onBlurName()}
              underlineColorAndroid='transparent'
            />
         </View>
         <View style={{marginRight:20, marginLeft: 20, backgroundColor:this.state.ulColorName, height: 2}}></View>
          <View style={{flexDirection: 'row', marginRight:20, marginLeft:20}}>
            <Image source={this.state.imgSourceEmail} style={{height: 15, width: 15,marginTop: 17 }}/>
            <FormInput
              style={styles.input}
              placeholder={'E-mail'}
              placeholderTextColor='#3b3d5e'
              onFocus={()=>this._onFocusEmail()}
              onBlur={()=>this._onBlurEmail()}
              underlineColorAndroid='transparent'
            />
         </View>
         <View style={{marginRight:20, marginLeft: 20, backgroundColor:this.state.ulColorEmail, height: 2}}></View>
         <View style={{flexDirection: 'row', marginRight:20, marginLeft: 20}}>
          <Image source={this.state.imgSourcePassword} style={{height: 15, width: 15,marginTop: 17}}/>
          <FormInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor='#3b3d5e'
            onFocus={()=>this._onFocusPassword()}
            onBlur={()=>this._onBlurPassword()}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={{marginRight:20, marginLeft: 20, backgroundColor:this.state.ulColorPassword, height: 2}}></View>

          <TouchableHighlight underlayColor='#15193c' activeOpacity={0.9}>
            <View style={styles.buttonLogIn}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </View>
          </TouchableHighlight>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight underlayColor='#2496f1' activeOpacity={0.9}>
              <View style={styles.buttonGoogle}>
                <Image source={require('images/google.png')}/>
                <Text style={{color: 'white', textAlign: 'center'}}>GOOGLE</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#3b5997' activeOpacity={0.9}>
              <View style={styles.buttonFacebook}>
                <Image source={require('images/facebook.png')}/>
                <Text style={{color: 'white' }}>FACEBOOK</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15,justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>Already have an account? go to  </Text>
            <Text style={{color: '#0ec0be', textDecorationLine: 'underline'}} onPress={()=>navigate('Login')}>Log in</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#15193c',
  },
  form: {
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
  },
  input: {
    color: '#0ec0be',
    marginRight: 20,
    width: width-60
  },
  buttonLogIn: {
    backgroundColor: '#0ec0be',
    borderWidth: 3,
    borderColor: '#0ec0be',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40
  },
  buttonGoogle:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor : '#2496f1',
    borderWidth: 3,
    borderColor: '#2496f1',
    borderRadius: 3,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginRight:0,
    width: width/2-45,
    height: 35
  },
  buttonFacebook:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor : '#3b5997',
    borderWidth: 3,
    borderColor: '#3b5997',
    borderRadius: 3,
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 10,
    marginTop: 10,
    width: width/2-45,
    height: 35
  },
  buttonText: {
    color: '#15193c',
    fontSize: 20,
  }
});
