import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
// import Firebase from "../firebase";
// const auth = Firebase.auth();

const BDReg = ( {navigation}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [empty, setEmpty] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [address, setAddress] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const emptyError = emptyfield(empty.value);
    const phoneError = emptyfield(phone.value); 
    const addressError = emptyfield(address.value);

    if (emailError || passwordError || nameError || emptyError||phoneError||addressError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setEmpty({ ...empty, error: emptyError });
      setPhone({ ...empty, error: phoneError });
      setAddress({ ...empty, error: addressError });
      return;
    }

    navigation.navigate('LoginScreen');
  };
  
  // const _onSignUpPressed = () => {
  //  try {
  //     if (email.value !== '' && password.value !== '') {
  //         auth.createUserWithEmailAndPassword(email.value, password.value); 
  //         navigation.replace('LoginScreen', {otherParam: String})
  //     }
  //   } catch (error) {
  //       alert(error.message)
  //   }
  // };

  return (
    <ScrollView>
    <Background>
      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone No"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
      />

      <TextInput
        label="Blood Group"
        returnKeyType="next"
        value={empty.value}
        onChangeText={text => setEmpty({ value: text, error: '' })}
        error={!!empty.error}
        errorText={empty.error}
      />

      <TextInput
        label="Address"
        returnKeyType="next"
        value={address.value}
        onChangeText={text => setAddress({ value: text, error: '' })}
        error={!!address.error}
        errorText={address.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Dropdown/>
      <Button
        mode="contained"
        onPress={_onSignUpPressed}
        style={{ marginTop: 20 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default BDReg;