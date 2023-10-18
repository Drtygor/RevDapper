import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Svg, Ellipse} from 'react-native-svg';

const HomePage = () => {
    return (
             <View style={styles.container}>
      <Text style={styles.brand}>Dapper</Text>
      <StatusBar style="auto" />
    </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  brand: {
    position: 'absolute',
    top: '10%',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    letterSpacing: 5,
    fontFamily: 'sans-serif-medium',

  },

  loading: {
    position: 'absolute',
    top: '75%',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    letterSpacing: 5, 
    fontFamily: 'sans-serif-medium',
  },

  image: {
    position: 'absolute',
    top: '32%',
    width: 270,
    height: 270,
  }
});

export default HomePage;