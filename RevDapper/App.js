import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{marginLeft: 4,
        }}>
        <Image 
          source={{uri: ''}}
          style={{width: 200, height: 200}}

        />
        
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

        
      <Button
        title="Login"
        color="black"
        
        />
     
      




      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center'
  },
});
