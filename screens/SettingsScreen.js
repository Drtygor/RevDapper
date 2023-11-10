import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/FinalDapperLogo.png';

const Settings = ({Navigation}) => {
    return (
        <View style= {styles.container}>
            <StatusBar style="dark" />

            {/*The Dapper Logo*/}
            <View style={styles.logoStyle}>
                <Image
                source = {Logo}
                style = {styles.logoImage}
                />
            </View>

            {/*Upload Photo Button*/}
            <TouchableOpacity
            style = {styles.settingButtons}
            >
                <Text style = {styles.textFormat}>Upload Photo</Text>
            </TouchableOpacity>

             {/*Change Username Button*/}
             <TouchableOpacity
            style = {styles.settingButtons}
            >
                <Text style = {styles.textFormat}>Change Username</Text>
            </TouchableOpacity>

             {/*Change Password Button*/}
             <TouchableOpacity
            style = {styles.settingButtons}
            >
                <Text style = {styles.textFormat}>Change Password</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black'
    },

    textFormat : {
        fontSize : 25,
        textAlign : 'center',
        fontWeight : 'normal',
        color : 'black',
    },

    logoStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 20
     },
 
     logoImage : {
         width : 150,
         height : 150
     },

     settingButtons : {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        width: "50%",
        marginTop : 15,
        }

});
export default Settings