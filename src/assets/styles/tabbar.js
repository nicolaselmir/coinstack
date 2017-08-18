import {React, StyleSheet, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
  title:{
    textAlign:'center',
    color:'#0ec0be',
    fontSize:10,
    marginBottom:-10,
    fontWeight:'800',
    fontFamily:'Muli-Bold'
  },
  icon:{
    marginBottom:5
  }
});

module.exports = styles;
