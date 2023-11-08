import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Settings = ({Navigation}) => {
    return (
        <View style= {styles.container}>
            <StatusBar style="dark" />
            
        </View>

    );
};

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black'
    }

});
export default MediaTrackSettings