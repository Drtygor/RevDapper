import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import profile from '../assets/blank-profile-picture-973460_1280.png'
import Logo from '../assets/FinalDapperLogo.png'

//Handles Logout Functionality
const handleLogout = (navigation) => {
    navigation.navigate('Landing');
};

//Handles the setting navigation
const handleSetting = (navigation) => {
    navigation.navigate();
}

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

             {/*The Dapper Logo */}
             <View style = {styles.logoStyle}>
                <Image
                source = {Logo}
                style = {styles.logoImage}
                />
            </View>

            {/*The profile icon */}
            <View style = {styles.profile}>
                <Image
                source = {profile}
                style = {styles.profileImage}
                />
            </View>

            {/*The Dummy Username */}
            <View style = {styles.usernameContainer}>
                <Text style = {styles.textFormat}>username</Text>
            </View>

            {/*Logout Button*/}
            <TouchableOpacity 
            style = {styles.settingButtons}
            onPress = {() => handleLogout(navigation)}>
                <Text style = {styles.textFormat}>Logout</Text>
            </TouchableOpacity>

            {/*Settings Page Button*/}
            <TouchableOpacity
            style = {styles.settingButtons}
            onPress = {() => handleSetting(navigation)}>
                <Text style = {styles.textFormat}>Settings</Text>
            </TouchableOpacity>

             {/*About Page Button*/}
             <TouchableOpacity
            style = {styles.settingButtons}
            >
                <Text style = {styles.textFormat}>About</Text>
            </TouchableOpacity>

        </View>

    );
};

//The styles/formatting for everything on the profile page
const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor : 'black'
    },

    logoStyle : {
       alignItems : 'center',
       justifyContent : 'center'
    },

    logoImage : {
        width : 150,
        height : 150
    },

    profile : {
        flexDirection : 'column',
        flex : 1,
        alignItems: 'center',

    },

    profileImage : {
        width : 100,
        height : 100
    },

    usernameContainer : {
        alignItems : 'center',
        backgroundColor : 'gray',
        borderRadius : 10,
        justifyContent : 'center',
        padding : 10,
        width : '50%',
        marginBottom : "20%",
        flexDirection : 'column'
    },

    textFormat : {
        fontSize : 25,
        textAlign : 'center',
        fontWeight : 'normal',
        color : 'black',
    },

    settingButtons : {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: "50%",
        flexDirection : 'column',
        marginBottom : 30,
    }

});
export default Profile
