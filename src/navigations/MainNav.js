import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

// screen
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/Profile';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;