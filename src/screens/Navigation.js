import React from 'react';
import { Provider } from 'react-native-paper';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { theme } from './core/theme';

import {
  Dashboard,
  Doctor,
} from './User';
// import Firebase from './firebase';
// const auth = Firebase.auth();


const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Signout({navigation}) {
    const handleSignOut = async () => {
    try {
      await auth.signOut().then(
      navigation.navigate('LoginScreen')  );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button style= {{    backgroundColor: '#F4F4F4',
    marginLeft: 20,
    width: 145,
    borderRadius: 50,}} mode ="outlined"
          onPress = {handleSignOut}>
          Signout
        </Button>
    </View>
  );
}

const MyTabs =({navigation})=> {
 
  return (
<Provider theme={theme}>
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffff"
      barStyle={{ backgroundColor: theme.colors.primary }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ViewProfile"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Doctor}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="logout"
        component={Signout}
        options={{
          tabBarLabel: 'LogOut',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </Provider>
  );
}



export default function Navigation() {
  return (
    <MyTabs/>
  );
}