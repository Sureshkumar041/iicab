import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import Testing from '../screens/Test/Testing'
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPasswordScreen from '../screens/ForgetPassword';



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      {/* <Stack.Screen name="Test" component={Testing} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />

    </Stack.Navigator>
  );
};

export default Navigation;
