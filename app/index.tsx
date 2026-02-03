import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6,
  Foundation,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

//gets screen width and makes each image 1 thrid of the screen to make all the images even
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3;

export default function Feed() {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <SafeAreaView style={s.container}>
      {/* Nav Row */}
      <View style={s.navRow}>
        <View style={s.navLeft}>
          <Entypo
            name="chevron-thin-left"
            size={22}
            color="black"
            style={{ marginVertical: "auto" }}
          />
          <Text style={s.navName}>nasa</Text>
          <MaterialIcons
            name="verified"
            size={16}
            color="#0397fe"
            style={{ marginVertical: "auto" }}
          />
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="grey"
          style={{ marginVertical: "auto" }}
        />
      </View>

      <View style={s.bio}>
        {/* Profile Picture */}
        <View style={s.topRow}>
          <View style={s.profilePicContainer}>
            <Image
              style={s.profilePicture}
              source={require("../assets/images/pfp.jpg")}
            />
          </View>

          {/* Stats Row */}
          <View style={s.statsRow}>
            <View>
              <Text style={{ marginBottom: 10, fontWeight: 700}}>NASA</Text>
              <Text style={s.stat}>4,600</Text>
              <Text style={s.statLabel}>posts</Text>
            </View>

            <View>
              <Text style={{ marginBottom: 10}}></Text>
              <Text style={s.stat}>98.5M</Text>
              <Text style={s.statLabel}>followers</Text>
            </View>

            <View>
              <Text style={{ marginBottom: 10}}></Text>
              <Text style={s.stat}>92</Text>
              <Text style={s.statLabel}>following</Text>
            </View>
          </View>
        </View>

        <Text style={s.bioText}>
          🚀 🌎 Exploring the universe and our home planet.
        </Text>
        <Text style={s.bioText}>Verification: nasa.gov/socialmedia</Text>

        <View>
          <Text>Followed by sam007_7, nolangooding and 23 others</Text>
        </View>
      </View>

      {/* Contact Section */}
      <View style={s.contactButtons}>
        <View style={[s.buttons, s.followButton]}>
          <Text style={[s.buttonText, s.buttonTextPrimary]}>Follow</Text>
        </View>
        <View style={[s.buttons, s.altButton]}>
          <Text style={s.buttonText}>Message</Text>
        </View>
        <View style={[s.buttons, s.altButton]}>
          <Text style={s.buttonText}>Email</Text>
        </View>
      </View>

      {/* Circl Icons */}
      <View style={s.circleIcons}>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <MaterialIcons name="phone-iphone" size={24} color="#0066ff" />
          </View>
          <Text style={s.circleText}>Wallpapers</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <MaterialCommunityIcons
              name="google-downasaur"
              size={24}
              color="#0066ff"
            />
          </View>
          <Text style={s.circleText}>Streaming</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <Entypo name="mic" size={24} color="#0066ff" />
          </View>
          <Text style={s.circleText}>Podcasts</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <FontAwesome6 name="shuttle-space" size={24} color="#0066ff" />
          </View>
          <Text style={s.circleText}>Missions</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <Foundation name="clipboard-pencil" size={24} color="#0066ff" />
          </View>
          <Text style={s.circleText}>Join Us</Text>
        </View>
      </View>

      {/* Grid */}
      <View style={s.imageGrid}>
        <Image
          style={s.gridImage}
          source={require("../assets/images/post1.jpg")}
        />
        <Image
          style={s.gridImage}
          source={require("../assets/images/post2.jpg")}
        />
        <Image
          style={s.gridImage}
          source={require("../assets/images/post3.jpg")}
        />
        <Image
          style={s.gridImage}
          source={require("../assets/images/post4.jpg")}
        />
        <Image
          style={s.gridImage}
          source={require("../assets/images/post5.jpg")}
        />
        <Image
          style={s.gridImage}
          source={require("../assets/images/post6.jpg")}
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  bio: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  bioText: {
    fontWeight: 100,
  },
  line: {
    fontSize: 14,
    color: "#111",
    marginTop: 2,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  navLeft: {
    flexDirection: "row",
    gap: 6,
  },
  navName: {
    fontSize: 18,
  },
  topRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  profilePicContainer: {
    height: 75,
    width: 75,
    borderRadius: 75,
    borderWidth: 0.5,
    borderColor: "#adadad",
    overflow: "hidden",
  },
  profilePicture: {
    height: "100%",
    width: "100%",
  },
  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    fontWeight: 600,
    fontSize: 17,
  },
  statLabel: {
    fontWeight: 100,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridImage: {
    //uses the screen width calculation here
    width: imageSize,
    height: imageSize,
  },
  contactButtons: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  buttons: {
    flex: 1,
    height: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  followButton: {
    backgroundColor: "#3b5cff",
  },
  altButton: {
    backgroundColor: "#e6e6e6",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  buttonTextPrimary: {
    color: "#fff",
  },
  circleIcons: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 14,
    gap: 20,
  },
  circleItem: {
    alignItems: "center",
  },
  circleText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: 100,
    color: "#303030",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: "black",
    borderColor: "#0066ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
});
