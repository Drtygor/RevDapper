import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<<<<<<< Updated upstream:RevDapper/App.js
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >

    <Stack.Screen name="Login" component={LoginPage} />    
    <Stack.Screen name="HomePage" component={HomePage} />


    </Stack.Navigator>
    </NavigationContainer>
>>>>>>> Stashed changes:App.js
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
