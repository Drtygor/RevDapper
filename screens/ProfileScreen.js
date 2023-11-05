import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="dark" />
      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ProfileScreen;
