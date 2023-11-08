import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Settings = ({Navigation}) => {
    return (
        <View style= {styles.container}>
            <StatusBar style="dark" />
            <View>
                <Text style = {styles.textFormat}> My plan is to have upload pfp button, change username and change password </Text>
            </View>
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
        color : 'white',
    },

});
export default Settings