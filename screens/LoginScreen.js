import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Logo from "../assets/FinalDapperLogo.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = () => {
    setError("");

    if (email === "" || password === "") {
      setError("Please fill out all fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        navigation.navigate("Home");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100} // Adjust the offset as needed
      >
        <View style={styles.container}>
          <StatusBar style="light" />
          <Icon
            name={"arrowleft"}
            size={60}
            color={"white"}
            onPress={() => navigation.navigate("Landing")}
          />

          <View style={styles.logo}>
            <Image
              source={Logo}
              style={{ width: "100%", height: 100, paddingVertical: 100 }} // Set the dimensions as needed
            />
          </View>

          <View style={styles.email}>
            <TextInput
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 20,
                backgroundColor: "white",
                width: "70%",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              placeholder="Enter Your Email"
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 20,
                backgroundColor: "white",
                width: "70%",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              placeholder="Enter Your Password"
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => onLogin()}
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 5,
                marginTop: 20, // Adjust the margin between
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            {error != "" ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: 20,
                  paddingTop: 10,
                }}
              >
                {error}
              </Text>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: "flex-start", // Center the content vertically
    flexDirection: "column",
    backgroundColor: "black",
    //alignItems: 'center',
  },

  email: {
    flexDirection: "column",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  logo: {
    flexDirection: "column",
    flex: 3,
  },
});

export default LoginScreen;
