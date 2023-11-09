import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const numColumns = 2;

const MyFlatList = () => {
  const resultImages = [
    {
      id: "1",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "2",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "3",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "4",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "5",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "6",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "7",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "8",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "9",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
    {
      id: "10",

      imageUri:
        "https://i.pinimg.com/550x/3f/70/6b/3f706b2075e5d9cf9ee33fe1a9b8d563.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.imageUri }} style={appStyles.image} />
  );

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.resultsScreenText}>Results</Text>
      <FlatList
        data={resultImages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={false}
        numColumns={numColumns}
      />
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

const ResultsScreen = () => {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <MyFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default ResultsScreen;
