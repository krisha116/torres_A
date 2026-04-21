import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

// screens
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/Profile';
import midtermexam from'../screen/midtermexam';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ROUTES.MIDTERM} component={midtermexam }/>
        
        </Stack.Navigator>
    );
};

export default MainNavigation;