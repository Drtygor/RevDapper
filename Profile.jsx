import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import profile from './assets/blank-profile-picture-973460_1280.png'

const handleLogout = (navigation) => {
    navigation.navigate('Login');
};

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            {/*The profile icon */}
            <View style = {styles.profile}>
                <Image
                source = {profile}
                style = {styles.profileImage}
                />
            </View>

            {/*The Dummy Username */}
            <View style = {styles.usernameContainer}>
                <Text style = {styles.username}>Username</Text>
            </View>

            {/*Logout Button*/}
            <TouchableOpacity 
            style = {styles.settingButtons}
            onPress = {() => handleLogout(navigation)}>
                <Text style = {styles.username}>Logout</Text>
            </TouchableOpacity>

            {/*Settings*/}
            <TouchableOpacity
            style = {styles.settingButtons}
            >
                <Text style = {styles.username}>Settings</Text>
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

    profile : {
        flexDirection : 'column',
        flex : 1,
        alignItems: 'center',
        marginTop : '40%'
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
        marginBottom : "35%",
        flexDirection : 'column'
    },

    username : {
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
        marginBottom : '10%',
    }

});
export default Profile