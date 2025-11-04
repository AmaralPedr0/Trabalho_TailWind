import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Contêiner principal que gerencia toda a navegação
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Tela inicial */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início', headerShown: false }}
        />
        {/* Tela de login */}
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ title: 'Log In', headerShown: false }}
        />
        {/* Tela de cadastro */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
