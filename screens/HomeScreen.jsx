import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Fourth Item",
    },
    {
      id: "5",
      title: "Fifth Item",
    },
    {
      id: "6",
      title: "Sixth Item",
    },
    {
      id: "7",
      title: "Seven Item",
    },
    {
      id: "8",
      title: "Eight Item",
    },
    {
      id: "9",
      title: "Nine Item",
    },
    {
      id: "10",
      title: "Ten Item",
    },
  ];

  const goToProfile = () => {
    navigation.navigate("Profile Screen");
  };

  const goToSingleTweet = () => {
    navigation.navigate("Tweet Screen");
  };

  const goToNewTweet = () => {
    navigation.navigate("New Tweet");
  };

  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity
        onPress={() => {
          goToProfile();
        }}
      >
        <Image
          style={styles.avatar}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => {
            goToSingleTweet();
          }}
        >
          <Text numberOfLines={1} style={styles.tweetName}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            @toni
          </Text>
          <Text>&middot;</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            9m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tweetContentContainer}
          onPress={() => goToSingleTweet()}
        >
          <Text style={styles.tweetContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, a
            aperiam sequi aliquid ab sunt. Animi corporis labore dolore atque.
          </Text>
        </TouchableOpacity>

        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name="comment"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="retweet"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="heart"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>5,500</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name={Platform.OS === "android" ? "share-google" : "share-apple"}
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeparator}></View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => goToNewTweet()}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  flexRow: {
    flexDirection: "row",
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: "gray",
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tweetContent: {
    lineHeight: 20,
  },
  textGray: {
    color: "gray",
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  ml4: {
    marginLeft: 16,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
});

export default HomeScreen;
