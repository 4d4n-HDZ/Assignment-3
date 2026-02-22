import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useFonts } from "expo-font";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Feed() {
  const [fontsLoaded] = useFonts({
    Billabong: require("../../assets/fonts/Billabong.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.page}>
      <View style={styles.topText}>
        <Ionicons name="add" size={26} color="black" />
        <Text style={styles.text}>Instagram</Text>
        <Ionicons name="heart-outline" size={26} color="black" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        <View style={styles.storyPicsEnviroment}>
          <View style={styles.storyItem}>
            <Image
              style={styles.personalStoryProfilePics}
              source={require("../../assets/images/pfp.jpg")}
            />
            <Text style={styles.caption}>Your Story</Text>
          </View>

          <View style={styles.storyItem}>
            <Image
              style={styles.storyProfilePics}
              source={require("../../assets/images/friendspfp1.png")}
            />
            <Text style={styles.caption}>c4milm</Text>
          </View>

          <View style={styles.storyItem}>
            <Image
              style={styles.storyProfilePics}
              source={require("../../assets/images/friendspfp2.png")}
            />
            <Text style={styles.caption}>ciervodepatas</Text>
          </View>

          <View style={styles.storyItem}>
            <Image
              style={styles.storyProfilePics}
              source={require("../../assets/images/friendspfp3.png")}
            />
            <Text style={styles.caption}>realtor.jonah</Text>
          </View>

          <View style={styles.storyItem}>
            <Image
              style={styles.storyProfilePics}
              source={require("../../assets/images/friendspfp1.png")}
            />
            <Text style={styles.caption}>gregthefurrie</Text>
          </View>
        </View>
      </ScrollView>

      {/* Post */}
      <View style={styles.postContainer}>
        <Video
          source={require("../../assets/videos/feedvideo.mp4")}
          style={styles.postMedia}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />

        {/* Overlay: pfp, username, icons */}
        <View style={styles.postTextContainer}>
          <Image
            style={styles.postProfilePicture}
            source={require("../../assets/images/creeper.png")}
          />

          <Text style={styles.postUsername}>minecraft</Text>

          <Ionicons name="checkmark-circle" size={10} color="white" />

          <Ionicons
            style={styles.threeDots}
            name="ellipsis-horizontal"
            size={20}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },

  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },

  text: {
    fontSize: 30,
    fontFamily: "Billabong",
  },

  storiesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  storyPicsEnviroment: {
    flexDirection: "row",
  },

  storyItem: {
    alignItems: "center",
    marginRight: 15,
  },

  storyProfilePics: {
    height: 77,
    width: 77,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "red",
  },

  personalStoryProfilePics: {
    height: 77,
    width: 77,
    borderRadius: 100,
  },

  caption: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 5,
    color: "black",
  },

  // ✅ Post container has a real height so the video can render correctly
  postContainer: {
    marginTop: 5,
    width: "100%",
    height: 650,
    backgroundColor: "black",
  },

  // ✅ Video fills the post container
  postMedia: {
    width: "100%",
    height: "100%",
  },

  // ✅ Overlay on top of video (no magic bottom numbers)
  postTextContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  postProfilePicture: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },

  postUsername: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 6,
  },

  // ✅ Push to far right
  threeDots: {
    marginLeft: "auto",
  },
});