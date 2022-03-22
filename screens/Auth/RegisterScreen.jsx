import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import axiosConfig from "../../helpers/axiosConfig";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = () => {
    setIsLoading(true);
    axiosConfig
      .post("/register", {
        name,
        email,
        username,
        password,
        password_confirmation: confirmPassword,
      })
      .then((response) => {
        Alert.alert("User created! Please login.");
        navigation.navigate("Login");

        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error.response);
        const key = Object.keys(error.response.data.errors)[0];
        setError(error.response.data.errors[key][0]);
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 130, width: 260 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={require("../../assets/larydefault.png")}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          {error && <Text style={{ color: "red" }}>{error}</Text>}
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="gray"
            textContetType="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => register()}
          style={[styles.loginButton, styles.mt5]}
        >
          {isLoading && (
            <ActivityIndicator
              style={{ marginRight: 18 }}
              size="small"
              color="white"
            />
          )}
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerTextLink}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d9bf1",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 120,
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084b3",
    padding: 12,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "white",
  },
  registerText: {
    fontSize: 12,
  },
  registerTextLink: {
    fontSize: 12,
    color: "white",
    textDecorationLine: "underline",
  },
  mt4: {
    marginTop: 16,
  },
  mt5: {
    marginTop: 22,
  },
});

export default LoginScreen;
