import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from './assets/FinalDapperLogo.png';
import Icon from 'react-native-vector-icons/AntDesign'

<<<<<<< Updated upstream
export const LoginPage = () => {
=======



export const LoginPage = ({ navigation }) => {
>>>>>>> Stashed changes
  return (
    //The View for the entire page
    <View style={{
      flex: 1,
      justifyContent: 'flex-start', // Center the content vertically
      flexDirection: 'column'
    }}>
      {/*The View for the logo*/}
      <View style={styles.logo}>
        <Image
          source={Logo}
          style={{ width: "100%", height: 100, paddingVertical: 150 }} // Set the dimensions as needed
        />
      </View>
      {/*The View for the button sign ups*/}
      <View style={styles.signup}>
<<<<<<< Updated upstream
      {/* Buttons */}
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 5,
          marginTop: 70,
          width: "70%",
          borderWidth: 2,
          borderColor: 'white'
        }}
      >
        <Text style={{ 
          color: 'black',
          textAlign: 'center', 
          fontSize: 20
=======
        {/* Buttons */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login Screen')}

          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 5,
            marginTop: 70,
            width: "70%",
            borderWidth: 2,
            borderColor: 'white',

          }}
        >
          <Text style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 20
>>>>>>> Stashed changes
          }}>Login</Text>
        </TouchableOpacity>

<<<<<<< Updated upstream
      <TouchableOpacity
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
=======
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign Up Screen')}
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
>>>>>>> Stashed changes
          }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/*Icon View*/}

      <View style={styles.appSignUp}>


<<<<<<< Updated upstream
        <Icon name={"apple1"} size={60} color={"white"} />



        <Icon name={"google"} size={60} color={"white"} />


        <Icon name={"instagram"} size={60} color={"white"} />
=======
        <Icon name={"apple1"} size={60} color={"white"}
          onPress={() => navigation.navigate('Sign Up Screen')} />



        <Icon name={"google"} size={60} color={"white"}
          onPress={() => navigation.navigate('Sign Up Screen')} />


        <Icon name={"instagram"} size={60} color={"white"}
          onPress={() => navigation.navigate('Sign Up Screen')} />
>>>>>>> Stashed changes



      </View>



    </View>

  );

};


//Styles
const styles = StyleSheet.create({
  container: {

    flex: 1,
    //alignItems: 'center',
  },

  signup: {
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

  appSignUp: {
    flexDirection: 'row',
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 0

  }




});

export default LoginPage;
