import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoadingPage from './loadingPage';
import LoginPage from './loginPage';
import HomePage from './homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  //list of url
  const data = [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F70%2F61708115ff10932bd9bb771f3110089435ac345e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main",
  
  
  ]
  
  return (
<<<<<<< Updated upstream
    <NavigationContainer>
      <Stack.Navigator>

    <Stack.Screen name="Login" component={LoginPage} />    
    <Stack.Screen name="HomePage" component={HomePage} />


    </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
=======
    

    <View>
      // text: recently uploaded
      // scrollview
      <image></image> // find out how to render url to image
      // dynamically render all images
    </View>
  );
}
>>>>>>> Stashed changes
