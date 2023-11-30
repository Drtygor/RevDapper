import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const numColumns = 3;

const MyFlatList = ({ navigation }) => {
  const recentImages = [
    {
      id: "1",
      imageUri:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F70%2F61708115ff10932bd9bb771f3110089435ac345e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main",
    },
    {
      id: "2",
      imageUri:
        "https://www.collinsdictionary.com/images/full/tshirt_204029461_1000.jpg",
    },
    {
      id: "3",
      imageUri:
        "https://media.istockphoto.com/id/697913308/de/foto/orange-herren-shorts-zum-baden.jpg?s=612x612&w=0&k=20&c=DPJH9bXBxld4AYMxkfF_cATVRg5X4NSfCdlcuUmP_C0=",
    },
  ];

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.imageUri }} style={appStyles.image} />
  );

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.recentlyUploadedText}>Favorites</Text>
      <FlatList
        data={recentImages}
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
  recentlyUploadedText: {
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

const Favorites = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <MyFlatList navigation={navigation} />
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

export default Favorites;
