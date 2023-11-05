import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/AntDesign";
import Logo from "../assets/FinalDapperLogo.png";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const onSignUp = () => {
    setError("");

    if (
      email === "" ||
      password === "" ||
      userName === "" ||
      confirmPass === ""
    ) {
      setError("Please fill out all fields");
      return;
    } else if (password !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    setError("Passwords do not match");

    createUserWithEmailAndPassword(auth, email, password)
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
              style={{ width: "100%", height: 100, paddingVertical: 75 }} // Set the dimensions as needed
            />
          </View>
          <View style={styles.email}>
            <TextInput
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 20,
                backgroundColor: "white",
                width: "80%",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              placeholder="Enter Your Username"
              onChangeText={(userName) => setUserName(userName)}
            />
            <TextInput
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 20,
                backgroundColor: "white",
                width: "80%",
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
                width: "80%",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              placeholder="Enter Password"
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
            />
            <TextInput
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 20,
                backgroundColor: "white",
                width: "80%",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              placeholder="Confirm Your Password"
              onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={onSignUp}
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
                width: "80%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Sign up
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
    paddingTop: 40,
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
    // flexDirection: "column",
    // flex: 0,
  },
});

export default SignupScreen;
