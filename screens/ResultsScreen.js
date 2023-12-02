import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";

import { useEffect, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";

const Stack = createNativeStackNavigator();

const numColumns = 2;

const MyFlatList = () => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.resultsScreenText}>Results</Text>
    </View>
  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultsScreenText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    paddingTop: 40,
    paddingBottom: 10,
    color: "white",
    backgroundColor: "black",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
});

const ResultsScreen = ({ route, navigation }) => {
  [image, setImage] = useState(undefined);
  [loading, setLoading] = useState(false);
  [label, setLabel] = useState("");
  const backendUrl = "https://factually-mature-warthog.ngrok-free.app";

  const { base64 } = route.params;

  useEffect(() => {
    // console.log(base64);

    if (image === undefined && !loading) {
      setLoading(true);
      axios
        .post(backendUrl + "/image2text/", {
          image: base64,
        })
        .then(async (response) => {
          const base64 = response.data.image;
          const label = response.data.label;
          setLabel(label);
          setImage(base64);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <Text style={appStyles.resultsScreenText}>Result</Text>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: `data:image/jpeg;base64,${image}`,
          }}
          style={styles.image}
        />
      </View>
      <Text style={{ marginTop: 20, color: "white", fontSize: 25 }}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
  },
  imageWrapper: {
    margin: 20,
  },
});

export default ResultsScreen;
