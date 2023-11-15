import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LaunchScreen">
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigation;
