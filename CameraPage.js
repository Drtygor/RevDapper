import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoadingPage from './loadingPage';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const cameraButtonSize = 90

export default function CameraPage() {



    const [permission, requestPermission] = Camera.useCameraPermissions();
    let cameraRef = useRef();
    const isFocused = useIsFocused();
    const [photo, setPhoto] = useState();


    let takePic = async () => {

        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);

        setPhoto(newPhoto);

    };

    if (!permission) {

        return (
            <View style={styles.container}>
                <LoadingPage />
            </View>
        );
    }

    if (!permission.granted) {
        requestPermission()
        return (
            <View style={styles.container}>
                <LoadingPage />
            </View>
        );
    }

    if (photo) {
        console.log(photo.uri)

        return (

            <View style={{ flex: 1, backgroundColor: "black" }}>
                <StatusBar hidden />
                <ImageBackground resizeMode="contain"
                    source={{ uri: photo.uri }}
                    style={styles.image}>


                    <View style={{
                        flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",

                    }}>
                        <TouchableOpacity style={{ paddingTop: 20, paddingHorizontal: 20 }} onPress={() => setPhoto(undefined)}>
                            <AntDesign name="close" size={40} color="white" />
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end",

                    }}>
                        <TouchableOpacity style={{ paddingBottom: 20, paddingHorizontal: 20 }}>
                            <Ionicons name="send" size={40} color="white" />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>




        );
    };



    return (
        <View style={styles.container}>
            <StatusBar hidden />
            {isFocused && <Camera style={styles.camera} type={CameraType.back} ratio={'16:9'} ref={cameraRef}>
                <View style={styles.bottomRow}>


                    <TouchableOpacity style={{ marginBottom: "auto", alignSelf: "flex-start" }}>
                        <AntDesign name="picture" size={60} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center" }} onPress={takePic}>
                        <Icon name="camera-iris" size={cameraButtonSize} color="white" />
                    </TouchableOpacity>


                </View>
                <View style={styles.buttomBuffer}></View>
            </Camera>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    camera: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column"
    },
    bottomRow: {
        height: cameraButtonSize, justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 20,

    },
    buttomBuffer: {
        height: 30,
        width: "100%"
    },
    image: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
    }


});
