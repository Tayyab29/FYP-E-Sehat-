import React from 'react';
import {StyleSheet, Image, Text, View } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

export default class DashBack extends React.Component {
  render(){
      return(
        <View style = {style.header}>
        <Image source={require('../asset/back3.jpg')} style={style.image} />
        </View>
      );
  }
}
const style = StyleSheet.create({
  header:{
    width:"100%",
    height:"25%",
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width:"100%",
    height:"210px"
  },
});
  