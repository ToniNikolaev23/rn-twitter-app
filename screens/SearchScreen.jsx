import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Search Screen</Text>
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

export default SearchScreen;
