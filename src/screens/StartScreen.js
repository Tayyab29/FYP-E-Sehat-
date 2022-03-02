import React from 'react'
import { View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import Background from './components/Background'
import Logo from './components/Logo'
import Header from './components/Header'
import Paragraph from './components/Paragraph'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome </Header>
      <Paragraph  fontStyles ="italic">
        Plesse select your role First!
      </Paragraph>
      <View style={style.btn}>
        <Button style= {style.text} mode="outlined"
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'PaReg'}) }>
           Patient
        </Button>
        <Button style= {style.text} mode ="outlined"
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'BDReg'})}>
          Blood Donor
        </Button>
      </View>

      <View style={style.btn}>
        <Button style= {style.text} mode="outlined" autoCapitalize= "none" 
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'DocReg'})}>
           Doctor
        </Button>
        <Button style= {style.text} mode ="outlined"
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'LaReg'})}>
         Laboratory
        </Button>
      </View>

      <View style={style.btn}>
        <Button style= {style.text} mode="outlined" 
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'PharReg'})}>
           Pharmacy
        </Button>
        <Button style= {style.text} mode ="outlined"
          onPress={() => navigation.navigate('LoginScreen', {otherParam: 'AmReg'})}>
          Ambulance
        </Button>
      </View>
    </Background>
  )
}

const style = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    padding: 8,
    height: '7%',
  },
  text: {
    backgroundColor: '#F4F4F4',
    marginLeft: 20,
    width: 145,
    borderRadius: 50,
  }
});

