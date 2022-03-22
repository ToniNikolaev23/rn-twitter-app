import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../context/AuthProvider";

const SettingsScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
      <Button onPress={() => logout()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
