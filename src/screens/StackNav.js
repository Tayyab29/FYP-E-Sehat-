import React from 'react';
import { Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './core/theme';
import PaReg from './Registration/PaReg';
import AmReg from './Registration/AmReg';
import PharReg from './Registration/PharReg';
import DocReg from './Registration/DocReg';
import LaReg from './Registration/LaReg';
import BDReg from './Registration/BDReg';
import Navigation from './Navigation';
import {
  StartScreen,
  LoginScreen,
  ResetPasswordScreen,
  SplashScreen,
  Doctor,
} from './User';


const Stack = createStackNavigator();

const StackNav =({navigation})=> {
  return(
    <Provider theme={theme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: true,
            headerStyle: {
            backgroundColor: theme.colors.primary,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'white',
                fontSize: 20,
              },
          }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'Login',
            }}
          />

          <Stack.Screen
           name="AmReg" 
           component={AmReg}
          options={{
              title: 'Ambulance Registration',
            }}
           />

           <Stack.Screen
           name="PaReg" 
           component={PaReg}
          options={{
              title: 'Patient Registration',
            }}
           />
          <Stack.Screen
           name="PharReg" 
           component={PharReg}
          options={{
              title: 'Pharmacy Registration',
            }}
           />
           <Stack.Screen
           name="BDReg" 
           component={BDReg}
          options={{
              title: 'Blood Donor Registration',
              headerTitleStyle: {
                fontSize: 18,
              },
            }}
           />
           <Stack.Screen
           name="DocReg" 
           component={DocReg}
          options={{
              title: 'Doctor Registration',
            }}
           />
           <Stack.Screen
           name="LaReg" 
           component={LaReg}
          options={{
              title: 'Laboratory Registration',
            }}
           />
          <Stack.Screen
           name="Dashboard" 
           component={Navigation}
          options={{
              title: 'Dashboard',
              headerShown: false,
            }}
           />
          <Stack.Screen
           name="Doctor" 
           component={Doctor}
          options={{
              title: 'Doctor',
              headerShown: true,
            }}
           />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
            screenOptions={{
              headerShown: true,
            }}
            options={{
              title: 'Reset Password',
            }}
          />
        </Stack.Navigator>
      </Provider>
  );
}
export default StackNav;