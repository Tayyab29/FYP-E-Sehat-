import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Logo from './components/Logo';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { emailValidator } from './helpers/emailValidator';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <View style= {styles.container}>
      <StatusBar backgroundColor="skyblue" translucent={true}/>
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}>
        Send email
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    alignSelf:'center',
    alignItems: 'center',
  },
})
