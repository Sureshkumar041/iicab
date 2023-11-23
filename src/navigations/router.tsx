import {createStackNavigator} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import SignUp from '../screens/SignUp';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPasswordScreen from '../screens/ForgetPassword';
import ResetPasswordScreen from '../screens/ResetPassword';
import TransportUserRegistration from '../screens/SignUp/TransportUserRegistration';
import TransportCompanyRegistration from '../screens/SignUp/TransportCompanyRegistration';
import DriverRegistration from '../screens/SignUp/DriverRegistration';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {/* <Stack.Screen name="Test" component={Testing} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="TransportUser"
        component={TransportUserRegistration}
      />
      <Stack.Screen
        name="TransportCompany"
        component={TransportCompanyRegistration}
      />
      <Stack.Screen name="DriverRegistration" component={DriverRegistration} />
    </Stack.Navigator>
  );
};

export default Navigation;
