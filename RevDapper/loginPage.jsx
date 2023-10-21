import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import logo from './assets/Dapper.png'
import LoadingPage from './loadingPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const LoginPage = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      
        <Image 
            source={logo}
            
            style={{width: "100%", height: "10.3%"}}

          />

      
      <View
      style = {{paddingTop: "70%",
        paddingLeft: 15,
        paddingRight: 15,}}>
          <View
        style={{marginLeft: 4,
          
        }}>
       
        <Text>Username</Text>
      </View>
        <TextInput
        style={{height: 40,
          width: '100%',
          borderColor: 'gray',
          borderRadius:10,
          borderWidth: 1,
          marginBottom: 10}}
        
      />

<View
        style={{marginLeft: 4}}>
        <Text>Password</Text>
      </View>

      <TextInput
        style={{height: 40,
          width: '100%',
          borderColor: 'gray',
          borderRadius:10,
          borderWidth: 1,}}
        
      />
    <View 
    style = {{marginTop : 20}}>
    <Button 
        onPress={() => navigation.navigate('HomePage')}
        title="Login"
        color="black"
        />


    </View>

    
      </View>
      

      

        
      
     
      




      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'top'
  },
});

export default LoginPage