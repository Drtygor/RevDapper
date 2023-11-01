import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/AntDesign'
import Logo from './assets/FinalDapperLogo.png';





export const LoginScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <StatusBar style="light" />
      <Icon name={"arrowleft"} size={60} color={"white"}
        onPress={() => navigation.navigate('Login')} />

      <View style={styles.logo}>
        <Image
          source={Logo}
          style={{ width: "100%", height: 100, paddingVertical: 100 }} // Set the dimensions as needed
        />
      </View>

      <View style={styles.email}>
        <TextInput style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
          backgroundColor: "white",
          width: "70%",
          padding: 20,
          borderRadius: 5,
          marginTop: 20,
        }} placeholder='Enter Your Email'/>
        


        <TextInput style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
          backgroundColor: "white",
          width: "70%",
          padding: 20,
          borderRadius: 5,
          marginTop: 20,
        }} placeholder='Enter Your Password' />
        

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 5,
            marginTop: 20, // Adjust the margin between 
            width: "70%"
          }}
        >
          <Text style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 20
          }}>Login</Text>
        </TouchableOpacity>





      </View>



    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'flex-start', // Center the content vertically
    flexDirection: 'column',
    backgroundColor: 'black'
    //alignItems: 'center',
  },

  email: {
    flexDirection: 'column',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',

  },

  logo: {
    flexDirection: 'column',
    flex: 3,

  },


});




export default LoginScreen;
