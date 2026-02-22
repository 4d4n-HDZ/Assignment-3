import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Shorts() {
  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/videos/shortsvideo.mp4")}
        style={styles.backgroundImage}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      <View style={styles.sideNavButtons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={28} color="white" />
          <Text style={styles.iconText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="paper-plane-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="white" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/saitlogo.png")}
          style={styles.logo} />
      </View>

      <View style={styles.bottomText}>
        <View style={styles.usernameRow}>
          <Image
            source={require("../../assets/images/saitlogo.png")}
            style={styles.profilePic}
          />
          <Text style={styles.username}>sait</Text>
        </View>
        <Text style={styles.description}>
          Need a specialized course to quickly get...
        </Text>
        <View style={styles.followedinfo}>
          <Image
            source={require("../../assets/images/friendspfp1.png")}
            style={styles.followProfilePic} />

          <Image
            source={require("../../assets/images/friendspfp2.png")}
            style={styles.followProfilePic} />

          <Image
            source={require("../../assets/images/friendspfp3.png")}
            style={styles.followProfilePic} />

          <Text style={[styles.followBy, { marginLeft: 10 }]}>
            Followed by caiqueccorreia and 33,798 others
          </Text>
        </View>
        <Text style={styles.ad}>Ad</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  sideNavButtons: {
    position: "absolute",
    right: 13,
    bottom: 15,
    alignItems: "center",
  },

  iconText: {
    color: "white",
    marginTop: 4,
  },

  iconButton: {
    marginBottom: 18,
    alignItems: "center",
  },

  bottomText: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    paddingRight: 70,
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  profilePic: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
    borderColor: "red",
    borderWidth: 2,
  },

  description: {
    color: "white",
    marginBottom: 6,
    flexWrap: "nowrap",
  },

  followBy: {
    color: "white",
    fontSize: 12,
  },

  followedinfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  followProfilePic: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: -6,
    borderWidth: 1,
    borderColor: "white",
  },

  ad: {
    color: "white",
    marginTop: 6,
    fontSize: 12,
  },

  logoContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },

  logo: {
    marginTop: 17,
    width: 28,
    height: 28,
    borderRadius: 8,
  }
});