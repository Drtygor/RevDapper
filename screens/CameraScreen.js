import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import LoadingScreen from "./LoadingScreen";
import { useIsFocused } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

import * as ImagePicker from "expo-image-picker";
const cameraButtonSize = 90;

export default function CameraScreen({ navigation }) {
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [mediaPickerPermission, requestMediaPickerPermission] =
    ImagePicker.useMediaLibraryPermissions();
  let cameraRef = useRef();
  const isFocused = useIsFocused();
  const [photo, setPhoto] = useState();

  let uploadPic = () => {
    let b64 = photo.base64;
    navigation.navigate("Results", { base64: b64 });
  };
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);

    setPhoto(newPhoto);
  };

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <LoadingScreen />
      </View>
    );
  }

  if (!mediaPickerPermission) {
    return (
      <View style={styles.container}>
        <LoadingScreen />
      </View>
    );
  }

  if (!mediaPickerPermission.granted) {
    requestMediaPickerPermission();
    return (
      <View style={styles.container}>
        <LoadingScreen />
      </View>
    );
  }

  if (!cameraPermission.granted) {
    requestCameraPermission();
    return (
      <View style={styles.container}>
        <LoadingScreen />
      </View>
    );
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0]);
    }
  };
  if (photo) {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar hidden={true} />
        <ImageBackground
          resizeMode="contain"
          source={{ uri: photo.uri }}
          style={styles.image}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{ paddingTop: 20, paddingHorizontal: 20 }}
              onPress={() => setPhoto(undefined)}
            >
              <AntDesign name="close" size={40} color="white" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{ paddingBottom: 20, paddingHorizontal: 20 }}
              onPress={uploadPic}
            >
              <Ionicons name="send" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar hidden={true} />}
      {isFocused && (
        <Camera
          style={styles.camera}
          type={CameraType.back}
          ratio={"16:9"}
          ref={cameraRef}
        >
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={{ marginBottom: "auto", alignSelf: "flex-start" }}
              onPress={pickImage}
            >
              <AntDesign name="picture" size={60} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center" }} onPress={takePic}>
              <Icon name="camera-iris" size={cameraButtonSize} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttomBuffer}></View>
        </Camera>
      )}
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
    flexDirection: "column",
  },
  bottomRow: {
    height: cameraButtonSize,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
  buttomBuffer: {
    height: 30,
    width: "100%",
  },
  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
