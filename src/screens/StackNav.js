import React from 'react';
import { Provider } from 'react-native-paper';
import {
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './core/theme';
import PaReg from './Registration/PaReg';
import AmReg from './Registration/AmReg';
import PharReg from './Registration/PharReg';
import DocReg from './Registration/DocReg';
import LaReg from './Registration/LaReg';
import BDReg from './Registration/BDReg';
import Genral from './Registration/Genral';
import Navigation from './Navigation';
import Category from './Category';
import {
  StartScreen,
  LoginScreen,
  ResetPasswordScreen,
  SplashScreen,
  Doctor,
  NotificationsTab,
  DocProfile
} from './User';
import DocDetails from './Doctor/DocDetails';
import Schedule from './Doctor/Schedule';

//For Ambulance Services Screens
import Ambulance from './Ambulance/start';
import SearchNearbyAmbulances from "./Ambulance/searchNearbyAmbulances";
import FoundNearbyAmbulances from "./Ambulance/foundNearbyAmbulances";
import AmbulanceDetails from "./Ambulance/ambulanceDetails";

//For Lab Screens
import Lab from "./Lab/start";
import SearchLabs from "./Lab/searchLabs";
import FoundLabs from "./Lab/foundLabs";
import LabDetails from "./Lab/labDetails";
import bookLab from './Lab/bookLab';
import Userdetails from './Lab/Userdetails';

//For Pharmacy Screens
import Pharmacy from "./Pharmacy/start";
import SearchNearbyPharmacies from "./Pharmacy/searchNearbyPharmacies";
import FoundNearbyPharmacies from "./Pharmacy/foundNearbyPharmacies";
import PharmacyDetails from "./Pharmacy/pharmacyDetails";
import MedicineScreen from './Pharmacy/medicine';
import MedicineDetails from './Pharmacy/MedicineDetails';
import CartScreen from './Pharmacy/CartScreen';
import Userdetailphar from './Pharmacy/Userdetailphar';

//For Blood Donation Screen
import Start from "./Blood/start";
import BloodDonors from "./Blood/bloodDonors";
import DonorDetails from "./Blood/donorDetails";







const Stack = createStackNavigator();

const StackNav = ({ navigation }) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={'white'}/>
    <Provider theme={theme}>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: true,
          marginTop: 10,
          headerStyle: {
            backgroundColor: 'white'//'#f0f2f5',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 20,
          },
        }}>
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: 'Book Appointment'
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login'
          }}
        />

        <Stack.Screen
          name="Ambulance"
          component={Ambulance}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SearchNearbyAmbulances"
          component={SearchNearbyAmbulances}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FoundNearbyAmbulances"
          component={FoundNearbyAmbulances}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AmbulanceDetails"
          component={AmbulanceDetails}
          options={{ title: "Details" }}
        />


        <Stack.Screen
          name="Lab"
          component={Lab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SearchLabs"
          component={SearchLabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FoundLabs"
          component={FoundLabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LabDetails"
          component={LabDetails}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="BookLab"
          component={bookLab}
          options={{ title: "Appointment Booking" }}
        />
        <Stack.Screen
          name="Userdetails"
          component={Userdetails}
          options={{ title: "Confirm Booking" }}
        />

        <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SearchNearbyPharmacies"
          component={SearchNearbyPharmacies}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FoundNearbyPharmacies"
          component={FoundNearbyPharmacies}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PharmacyDetails"
          component={PharmacyDetails}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="MedicineScreen"
          component={MedicineScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineDetails"
          component={MedicineDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Userdetailphar"
          component={Userdetailphar}
          options={{ title: "Personal Details" }}
        />


        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="BloodDonors"
          component={BloodDonors}
          options={{
            title: "Blood Donors",
          }}
        />

        <Stack.Screen
          name="DonorDetails"
          component={DonorDetails}
          options={{
            title: "Profile",
          }}
        />

        <Stack.Screen
          name="Category"
          component={Category}
          options={{ title: 'Category', }}
        />
        <Stack.Screen
          name="DocProfile"
          component={DocProfile}
          options={{
            title: 'Doctors'
          }}
        />
        <Stack.Screen
          name="DocDetails"
          component={DocDetails}
          options={{
            title: 'Doctor Datails'
          }}
        />
        <Stack.Screen
          name="Root"
          component={Navigation}
          options={{
            headerShown: false,
            headerTintColor: '#fff2',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
           <Stack.Screen name="NotificationsTab" component={NotificationsTab} options={{
                    headerStyle: {
                        backgroundColor: '#00adb4',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, title: 'Notifications'
                }} />
            </Stack.Group> */}
        <Stack.Screen
          name="Notification"
          component={NotificationsTab}
          options={{
            title: 'Notification',
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
        <Stack.Screen
          name="Genral"
          component={Genral}
          options={{
            title: 'Registration Form',
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
      </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  );
}
export default StackNav;
