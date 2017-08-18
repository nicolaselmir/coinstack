import React, {Component}from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight, TextInput,StatusBar, Image, Keyboard, Alert, TabBarIOS}from 'react-native';
import {createRouter, NavigationProvider, StackNavigation, TabNavigation,TabNavigationItem as TabItem,}from '@expo/ex-navigation';
import styles from 'styles/tabbar'

import Wallet from './tabs/wallet';
import Coins from './tabs/coins';
import News from './tabs/news';
import Settings from './tabs/settings';

const Router = createRouter(() => ({
  wallet: () => Wallet,
  coins: () => Coins,
  news: () => News,
  settings: () => Settings,
}));

export default class mainTab extends Component{
  constructor(props){
    super(props);
    this.renderIcon = this.renderIcon.bind(this)
    this.state={
      wallet:true,
      coins:false,
      news: false,
      settings: false
    }
  }

  render(){
    return(
      <NavigationProvider router={Router}>

      <TabNavigation tintColor='red' tabBarStyle={{borderTopWidth: 1, borderTopColor: '#11142e'}} tabBarColor ={'#11142e'} id="main" navigatorUID = "main" initialTab = "wallet" >

      <TabItem name="WALLET" id="wallet" onPress={this.onPress} renderIcon={()=> this.renderIcon(require('images/wallet.png'),'WALLET')} renderSelectedIcon={()=> this.renderSelectedIcon(require('images/coins.png'),'Hello')}>
       <StackNavigation  id="home" initialRoute={Router.getRoute('wallet')}/>
      </TabItem>

      <TabItem name="search"  id="categories" renderIcon={()=> this.renderIcon(require('images/coins.png'),'COINS')}>
       <StackNavigation id="search" initialRoute = {Router.getRoute('coins')}/>
      </TabItem>

      <TabItem name="favs" id="favs" onPress={this.onPress} renderIcon={()=> this.renderIcon(require('images/news.png'),'NEWS')}>
         <StackNavigation id="favs" initialRoute = {Router.getRoute('news')}  />
      </TabItem>

      <TabItem name="settings" id="settings" onPress={this.onPress} renderIcon={()=> this.renderIcon(require('images/settings.png'),'SETTINGS')}>
         <StackNavigation id="favs" initialRoute = {Router.getRoute('settings')} />
      </TabItem>

      </TabNavigation>
    </NavigationProvider>
    )
  }

  renderIcon(path,title){
    if (this.state.wallet == true) {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        <Text style={styles.title}>{title}</Text>
        </View>
      )
    }else {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        </View>
      )
    }

    if (this.state.coins == true) {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        <Text style={styles.title}>{title}</Text>
        </View>
      )
    }else {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        </View>
      )
    }

    if (this.state.coins == true) {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        <Text style={styles.title}>{title}</Text>
        </View>
      )
    }else {
      return(
        <View style={{alignItems:'center'}}>
          <Image style={styles.icon} source={path}/>
        </View>
      )
    }

  }

}
