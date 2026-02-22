import {
  Entypo,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RocketTakeOff from "../components/rocket";

// gets screen width and makes each image 1 third of the screen
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3;

export default function Feed() {
  const [activeTab, setActiveTab] = useState("images");
  const [launchSignal, setLaunchSignal] = useState(0);

  const handleFollowPress = () => {
    console.log("Follow pressed -> launching rocket");
    setLaunchSignal((n) => n + 1);
  };

  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <SafeAreaView edges={["left", "right"]} style={s.container}>
      <StatusBar style="dark" translucent />
      <RocketTakeOff launchSignal={launchSignal} />

      <ScrollView contentContainerStyle={s.scrollContent}>
        <View style={s.totalSpace}>
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
            <View style={s.topRow}>
              <View style={s.profilePicContainer}>
                <Image
                  style={s.profilePicture}
                  source={require("../../assets/images/pfp.jpg")}
                />
              </View>

              <View style={s.statsRow}>
                <View>
                  <Text style={{ marginBottom: 10, fontWeight: "700" }}>
                    NASA
                  </Text>
                  <Text style={s.stat}>4,600</Text>
                  <Text style={s.statLabel}>posts</Text>
                </View>

                <View>
                  <Text style={{ marginBottom: 10 }} />
                  <Text style={s.stat}>98.5M</Text>
                  <Text style={s.statLabel}>followers</Text>
                </View>

                <View>
                  <Text style={{ marginBottom: 10 }} />
                  <Text style={s.stat}>92</Text>
                  <Text style={s.statLabel}>following</Text>
                </View>
              </View>
            </View>

            <View style={s.separationDesc}>
              <Text style={s.statLabel}>
                🚀 🌎 Exploring the universe and our home planet.
              </Text>
              <Text style={s.statLabel}>
                Verification: nasa.gov/socialmedia
              </Text>

              <View style={s.link}>
                <Text style={{ fontWeight: "bold", lineHeight: 20 }}>
                  <AntDesign name="link" size={16} color="black" /> www.nasa.gov
                  and 3 more
                </Text>
              </View>

              <View style={s.separationFollowed}>
                <View style={s.followedRow}>
                  <View style={s.avatarStack}>
                    <Image
                      source={require("../../assets/images/1 Orange and black.jpg")}
                      style={[s.iconFollowed, s.avatar]}
                    />
                    <Image
                      source={require("../../assets/images/2 pink and black.png")}
                      style={[s.iconFollowed, s.avatar, s.avatarOverlap]}
                    />
                    <Image
                      source={require("../../assets/images/3 blue and white.jpg")}
                      style={[s.iconFollowed, s.avatar, s.avatarOverlap]}
                    />
                  </View>

                  <Text style={s.followedText}>
                    Followed by{" "}
                    <Text style={s.bold}>sam007_7</Text>,{" "}
                    <Text style={s.bold}>nolangooding</Text> and{"\n"}
                    <Text style={s.bold}>23 others</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={s.separationFollowed}>
            <View style={s.contactButtons}>
              <Pressable
                onPress={handleFollowPress}
                style={[s.buttons, s.followButton]}
              >
                <Text style={[s.buttonText, s.buttonTextPrimary]}>
                  Follow
                </Text>
              </Pressable>

              <View style={[s.buttons, s.altButton]}>
                <Text style={s.buttonText}>Message</Text>
              </View>

              <View style={[s.buttons, s.altButton]}>
                <Text style={s.buttonText}>Email</Text>
              </View>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.circleIcons}
          >
            <View style={s.circleItem}>
              <View style={s.outerCircle}>
                <View style={s.gapCircle}>
                  <View style={s.iconCircle}>
                    <MaterialIcons name="phone-iphone" size={24} color="#0066ff" />
                  </View>
                </View>
              </View>
              <Text style={s.circleText}>Wallpapers</Text>
            </View>

            <View style={s.circleItem}>
              <View style={s.outerCircle}>
                <View style={s.gapCircle}>
                  <View style={s.iconCircle}>
                    <MaterialCommunityIcons name="google-downasaur" size={24} color="#0066ff" />
                  </View>
                </View>
              </View>
              <Text style={s.circleText}>Streaming</Text>
            </View>

            <View style={s.circleItem}>
              <View style={s.outerCircle}>
                <View style={s.gapCircle}>
                  <View style={s.iconCircle}>
                    <Entypo name="mic" size={24} color="#0066ff" />
                  </View>
                </View>
              </View>
              <Text style={s.circleText}>Podcasts</Text>
            </View>

            <View style={s.circleItem}>
              <View style={s.outerCircle}>
                <View style={s.gapCircle}>
                  <View style={s.iconCircle}>
                    <FontAwesome6 name="shuttle-space" size={24} color="#0066ff" />
                  </View>
                </View>
              </View>
              <Text style={s.circleText}>Missions</Text>
            </View>

            <View style={s.circleItem}>
              <View style={s.outerCircle}>
                <View style={s.gapCircle}>
                  <View style={s.iconCircle}>
                    <Foundation name="clipboard-pencil" size={24} color="#0066ff" />
                  </View>
                </View>
              </View>
              <Text style={s.circleText}>Join Us</Text>
            </View>
          </ScrollView>

          <View style={s.profileTabs}>
            <View style={[s.tabItem, s.activeTab]}>
              <Ionicons name="grid-outline" size={22} />
            </View>

            <View style={s.tabItem}>
              <Ionicons name="play-outline" size={22} />
            </View>

            <View style={s.tabItem}>
              <Ionicons name="person-outline" size={22} />
            </View>
          </View>

          {/* Grid */}
          <View style={s.imageGrid}>
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post1.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post2.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post3.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post4.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post5.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post6.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post1.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post2.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post3.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post4.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post5.jpg")}
            />
            <Image
              style={s.gridImage}
              source={require("../../assets/images/post6.jpg")}
            />
          </View>
        </View>
        <View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  totalSpace: {
    marginTop: 15,
  },

  separationDesc: {
    marginTop: 5,
  },

  separationFollowed: {
    marginTop: 8,
  },

  separationIcons: {
    marginTop: 12,
  },

  scrollContent: {
    paddingBottom: 90,
  },

  bio: {
    paddingHorizontal: 16,
    paddingTop: 10,
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
    fontWeight: "600",
    fontSize: 17,
  },

  statLabel: {
    fontWeight: "400",
  },

  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  link: {
    marginTop: 6,
  },

  followed: {
    marginTop: 7,
  },

  gridImage: {
    width: imageSize,
    height: 230,
    borderWidth: 0.5,
    borderColor: "#fff",
  },

  iconFollowed: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "black",
    borderColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
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

  profileTabs: {
    flexDirection: "row",
    borderTopWidth: 8,
    borderTopColor: "#f5f3f3ff",
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },

  followedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  avatarStack: {
    flexDirection: "row",
    marginRight: 6,
  },

  avatar: {
    marginLeft: 0,
  },

  avatarOverlap: {
    marginLeft: -8,
  },

  followedText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 16,
  },

  bold: {
    fontWeight: "600",
  },

  circleIcons: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 14,
    gap: 13,
    paddingBottom: 6,
  },

  circleItem: {
    alignItems: "center",
  },

  circleText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: "400",
    color: "#303030",
    textAlign: "center",
    maxWidth: 80,
    lineHeight: 14,
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
  },

  outerCircle: {
    width: 70,
    height: 70,
    borderWidth: 4,
    borderRadius: 35,
    backgroundColor: "white",
    borderColor: "hsla(0, 0%, 86%, 1.00)",
    alignItems: "center",
    justifyContent: "center",
  },

  gapCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
  },

  alertButton: {
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },

  alertButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
