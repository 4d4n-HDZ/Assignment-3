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

//gets screen width and makes each image 1 thrid of the screen to make all the images even
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3;

export default function Feed() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.navRow}>
        <Entypo name="chevron-left" size={28} color="black"/>
        <Text style={s.navName}>nasa</Text>
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
              <Text>NASA</Text>
              <Text style={s.stat}>4,600</Text>
              <Text style={s.statLabel}>posts</Text>
            </View>

            <View>
              <Text></Text>
              <Text style={s.stat}>98.5M</Text>
              <Text style={s.statLabel}>followers</Text>
            </View>

            <View>
              <Text></Text>
              <Text style={s.stat}>92</Text>
              <Text style={s.statLabel}>following</Text>
            </View>
          </View>
        </View>

        <Text style={s.bioText}>🚀 🌎 Exploring the universe and our home planet.</Text>
        <Text style={s.bioText}>Verification: nasa.gov/socialmedia</Text>
      </View>
      <View>
        <Text>Followed by sam007_7, nolangooding and 23 others</Text>
      </View>
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
      <View style={s.circleIcons}>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <MaterialIcons name="phone-iphone" size={24} color="blue" />
          </View>
          <Text style={s.circleText}>Wallpapers</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <MaterialCommunityIcons
              name="google-downasaur"
              size={24}
              color="blue"
            />
          </View>
          <Text style={s.circleText}>Streaming</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <Entypo name="mic" size={24} color="blue" />
          </View>
          <Text style={s.circleText}>Podcasts</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <FontAwesome6 name="shuttle-space" size={24} color="blue" />
          </View>
          <Text style={s.circleText}>Missions</Text>
        </View>
        <View style={s.circleItem}>
          <View style={s.iconCircle}>
            <Foundation name="clipboard-pencil" size={24} color="blue" />
          </View>
          <Text style={s.circleText}>Join Us</Text>
        </View>
      </View>

      <View></View>
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
    fontWeight: 100
  },
  line: {
    fontSize: 14,
    color: "#111",
    marginTop: 2,
  },
  navRow: {
    flexDirection: "row"
  },
  navName: {
    fontSize: 18
  },
  topRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  profilePicContainer: {
    height: 75,
    width: 75,
    borderRadius: 75,
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
    fontWeight: 700,
    fontSize: 16,
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
    backgroundColor: "#f2f2f2",
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
    color: "#111",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: "black",
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
});
