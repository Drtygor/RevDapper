import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {Svg, Ellipse} from 'react-native-svg';
import logo from './assets/Dapper.png'



const HomePage = () => {
    return (
             <View style={styles.container}>
       <Image 
            source={logo}
            
            style={{width: "100%", height: "10.3%"}}

          />

      

     

      <View
      style = {{paddingTop: "10%",
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: 'center',
        
        }}>
          <View
        style={{marginLeft: 4,
        }}>
       
        <Text style={styles.slogan}> Generate Your Dream Wardrobe! </Text>
      </View>
  

      </View>

      <View style = {{marginTop : 40}}>
    <Button 
        // onPress={() => navigation.navigate('HomePage')}
        title="Scan Here"
        color="black"
        />
    </View>
    <View style = {{marginTop : 50}}>
    <Button

        title="Upload Here"
        color="black"/>

  
    </View>
    <View style = {{marginTop : 70,
    justifyContent : "flex-end",}}>

    <Button

        title="Open Your Wardrobe"
        color="black"/>
    </View>
    </View>

   
    )
}




const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top'
  },

  brand: {
    position: 'absolute',
    top: '10%',
    fontWeight: 'bold',
    fontSize: 80,
    color: 'black',
    letterSpacing: 5,
    fontFamily: 'sans-serif-medium',

  },

  slogan: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black', 
    fontFamily: 'sans-serif-medium',
    alignContent: 'flex-start',
  },

  image: {
    position: 'absolute',
    top: '32%',
    width: 270,
    height: 270,
  }
});

export default HomePage;