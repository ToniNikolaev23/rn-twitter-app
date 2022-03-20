import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";

const TweetScreen = ({ navigation }) => {
  const goToProfile = () => {
    navigation.navigate("Profile Screen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow} onPress={() => goToProfile()}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <View>
            <Text style={styles.tweetName}>Toni Stoyanov</Text>
            <Text style={styles.tweetHandle}>@toni</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContentContainer}>
        <Text style={styles.tweetContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          obcaecati earum culpa veritatis accusantium nesciunt sit iure et ab,
          odit ratione quasi at nobis eligendi rerum, neque architecto minus?
          Quisquam!
        </Text>
      </View>
      <View style={styles.tweetEngagement}>
        <View style={styles.flexRow}>
          <Text style={styles.tweetEngagementNumber}>655</Text>
          <Text style={styles.tweetEngagementLabel}>Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>38</Text>
          <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>2834</Text>
          <Text style={styles.tweetEngagementLabel}>Likes</Text>
        </View>
      </View>

      <View style={[styles.tweetEngagement, styles.spaceAround]}>
        <TouchableOpacity>
          <EvilIcons name="comment" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="retweet" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="heart" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name={Platform.OS === "android" ? "share-google" : "share-apple"}
            size={32}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 30,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    color: "gray",
    marginTop: 6,
  },
  tweetContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tweetContent: {
    fontSize: 20,
    lineHeight: 30,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tweetEngagementNumber: {
    fontWeight: "bold",
  },
  tweetEngagementLabel: {
    color: "gray",
    marginLeft: 6,
  },
  ml4: {
    marginLeft: 16,
  },
  spaceAround: {
    justifyContent: "space-around",
  },
});

export default TweetScreen;
