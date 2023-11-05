import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const ProfileScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isFocused && <StatusBar style="dark" />}
      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ProfileScreen;
