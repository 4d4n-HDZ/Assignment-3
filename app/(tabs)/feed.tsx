import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function Feed() {
  const [fontsLoaded] = useFonts({
    Billabong: require("../../assets/fonts/Billabong.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.topText}>
        <Ionicons name="add" size={26} color="black" />
        <Text style={styles.text}>Instagram</Text>
        <Ionicons name="heart-outline" size={26} color="black" />
      </View>

      <ScrollView 
        horizontal={true}  
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}>

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
      
      <View style={styles.postContainer}>
        {/* post picture */}
        <Image 
        style={styles.photo}
        source={require("../../assets/images/minecraft.png")}
        />
        {/* pfp, username */}
        <View style={styles.postTextContainer}>
          <Image 
          style={styles.postProfilePicture}
          source={require("../../assets/images/creeper.png")}/>
          <Text style={styles.postUsername}>
            minecraft
          </Text>
          <Ionicons name="checkmark-circle" size={10} color="white" />
          <Ionicons style={styles.threeDots}name="ellipsis-horizontal" size={20} color="white" />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
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

  storiesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  caption: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 5,
    color: "black"
  },

  postContainer: {
    marginTop: 5,
  },

  photo: {
    width: "100%",
    height: 650,
  },

  postTextContainer: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 610,
    left: 10,
  },

  postUsername: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 10,
  },

  postProfilePicture: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  threeDots: {
    left: 240
  }
});