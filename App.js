import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './loginPage'
<<<<<<< Updated upstream
=======
import LoginScreen from './login'
import SignUpScreen from './signup'
import HomePage from './homePage';


>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
<<<<<<< Updated upstream
      screenOptions={{
        headerShown: false
      }}
      >

    <Stack.Screen name="Login" component={LoginPage} />    
=======
        screenOptions={{
          headerShown: false,

        }}>

        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomePage} />
>>>>>>> Stashed changes



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
