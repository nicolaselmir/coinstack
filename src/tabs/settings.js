import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight,Button, TextInput, StatusBar, Image, Keyboard, Alert, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Settings extends Component{

  constructor(props){
    super(props);
    this._renderSupport=this._renderSupport.bind(this);
    this.state={
      lang: 'ENG',
      langDropIcon: require('images/Dropdown.png'),
      langDropHeight: 0,
      supportDropIcon: require('images/Dropdown.png'),
      ulColorEmail: '#3b3d5e',
      ulColorSupport: '#3b3d5e',
      imgSourceEmail: require('images/user.png'),
      imgSourceSupport: require('images/paragraph.png'),
      Drop: false,
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
    this.setState({imgHeight: height*0.33, backArrowHeight: 0});
  }
  _keyboardDidShow = () => {
    this.setState({imgHeight: 0, backArrowHeight:20});
  }
  _onBlurEmail() {
    this.setState({imgSourceEmail: require('images/user.png'), ulColorEmail:'#3b3d5e'});
  }
 _onFocusEmail() {
   this.setState({imgSourceEmail: require('images/user_active.png'), ulColorEmail: '#0ec0be'});
  }
  _onBlurSupport() {
    this.setState({imgSourceSupport: require('images/paragraph.png'), ulColorSupport:'#3b3d5e'});
  }
 _onFocusSupport() {
   this.setState({imgSourceSupport: require('images/paragraph_active.png'), ulColorSupport: '#0ec0be'});
  }

  _langDrop(){
      this.setState({langDropIcon: require('images/Close_dropdown.png'), langDropHeight:70})
      if(this.state.langDropHeight===70){
        this._langClose();
      }
  }
  _supportDrop(){
      this.setState({supportDropIcon: require('images/Close_dropdown.png'), Drop: true})
      if(this.state.Drop==true){
        this._supportClose();
      }
  }

  _supportClose(){
    this.setState({supportDropIcon: require('images/Dropdown.png'), Drop: false})
  }

  _langClose(){
    this.setState({langDropIcon: require('images/Dropdown.png'), langDropHeight: 0})
  }

  _renderSupport(){
    if(this.state.Drop==true)
      return(
        <View>
          <View style={{flexDirection: 'row', marginRight:40, marginLeft:40, marginTop: 20}}>
            <Image source={this.state.imgSourceEmail} style={{height: 15, width: 15,marginTop: 17 }}/>
            <TextInput
              style={{color: '#0ec0be',marginRight: 20,width: width-60,fontFamily: 'Nunito-Regular'}}
              placeholder={'Your e-mail'}
              placeholderTextColor='#3b3d5e'
              onFocus={()=>this._onFocusEmail()}
              onBlur={()=>this._onBlurEmail()}
              underlineColorAndroid='transparent'
            />
         </View>
         <View style={{marginRight:40, marginLeft: 40, backgroundColor:this.state.ulColorEmail, height: 2}}></View>

         <View style={{flexDirection: 'row', marginRight:40, marginLeft:40}}>
           <Image source={this.state.imgSourceSupport} style={{height: 15, width: 15,marginTop: 17 }}/>
           <TextInput
             style={{color: '#0ec0be',marginRight: 20,width: width-60,fontFamily: 'Nunito-Regular'}}
             placeholder={'Discribe your issue'}
             placeholderTextColor='#3b3d5e'
             onFocus={()=>this._onFocusSupport()}
             onBlur={()=>this._onBlurSupport()}
             underlineColorAndroid='transparent'
           />
        </View>
        <View style={{marginRight:40, marginLeft: 40,marginTop: 30, backgroundColor:this.state.ulColorSupport, height: 2}}></View>
        <TouchableHighlight style={{backgroundColor:'#0ec0be', marginLeft:40, marginRight:40, height:40, marginTop: 20, borderRadius:5, justifyContent:'center'}}>
          <View>
            <Text style={{alignSelf:'center', color: '#15193c',fontSize: 20,fontFamily:'Nunito-Regular',}}>Send</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
    else{
      return(
        <View></View>
      )
    }
  }

  _changeLang(){
    if(this.state.lang==='ENG'){
      this.setState({lang:'DUT'});
      this._langClose();
    }else{
      this.setState({lang:'ENG'});
      this._langClose();
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'#15193c',flex:1}}>
        <Text style={{alignSelf:'center', color:'#0ec0be', marginTop: 45, fontSize: 20, fontFamily:'Muli-SemiBold', letterSpacing:1.3}}>SETTINGS</Text>
        <View style={{height: 1, backgroundColor:'#3b3d5e', marginTop: 50}}></View>

        <TouchableHighlight style={{ justifyContent:'center', marginTop:20}} onPress={()=>this._langDrop()} underlayColor='transparent'>
          <View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{flexDirection:'row', marginLeft: 40, marginRight: 40}}>
                <Image source={require('images/language.png')} style={{width:20, height:20, alignSelf:'center'}}/>
                <Text style={{color:'white', marginLeft: 15, fontFamily:'Nunito-SemiBold', fontSize:17}}>Language</Text>
              </View>
              <View style={{marginRight:40, flexDirection:'row'}}>
                <Text style={{color:'#0ec0be', marginLeft: 15, fontFamily:'Nunito-SemiBold', fontSize:17}}>{this.state.lang}</Text>
                <Image source={this.state.langDropIcon} style={{width:15, height:15, marginLeft: 15, alignSelf:'center'}}/>
              </View>
            </View>

            <View style={{alignItems:'center',marginTop:15, height:this.state.langDropHeight}}>
              <Text style={{color:'#0ec0be', marginLeft: 15, fontFamily:'Muli-SemiBold', fontSize:17}} onPress={()=>this._changeLang()}>ENGLISH</Text>
              <Text style={{color:'#0ec0be', marginLeft: 15, fontFamily:'Muli-SemiBold', fontSize:17, marginTop: 10}} onPress={()=>this._changeLang()}>DUTCH</Text>
            </View>
          </View>
         </TouchableHighlight>



        <View style={{height: 1, backgroundColor:'#3b3d5e', marginTop: 10}}></View>

        <TouchableHighlight style={{marginTop:20}} onPress={()=>this._supportDrop()}  underlayColor='transparent'>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', marginLeft: 40, marginRight: 40}}>
              <Image source={require('images/support.png')} style={{width:20, height:20, alignSelf:'center'}}/>
              <Text style={{color:'white', marginLeft: 15, fontFamily:'Nunito-SemiBold', fontSize:17}}>Support</Text>
            </View>
            <View style={{marginRight:40, flexDirection:'row'}}>
              <Image source={this.state.supportDropIcon} style={{width:15, height:15, marginLeft: 15, alignSelf:'center'}}/>
            </View>
          </View>
        </TouchableHighlight>

        <View>{this._renderSupport()}</View>

        <View style={{height: 1, backgroundColor:'#3b3d5e', marginTop: 20}}></View>

        <TouchableHighlight style={{marginTop:20}} underlayColor='transparent'>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', marginLeft: 40, marginRight: 40}}>
              <Image source={require('images/logout.png')} style={{width:25, height:20, alignSelf:'center'}}/>
              <Text style={{color:'white', marginLeft: 15, fontFamily:'Nunito-SemiBold', fontSize:17}}>Log out</Text>
            </View>
            <View style={{marginRight:40, flexDirection:'row'}}>
              <Image source={require('images/Forward.png')} style={{width:15, height:15, marginLeft: 15, alignSelf:'center'}}/>
            </View>
          </View>
        </TouchableHighlight>

        <View style={{height: 1, backgroundColor:'#3b3d5e', marginTop: 20}}></View>

      </View>
    )
  }


  click(Title,Index){
    this.props.navigator.push('sublist', {title:Title,index:Index})
  }
}
