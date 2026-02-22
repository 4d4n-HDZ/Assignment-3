import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import React, { useMemo } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MediaItem = {
  id: string;
  type: "image" | "video";
  source: number;
};

const screenWidth = Dimensions.get("window").width;

const GAP = 2;
const NUM_COLS = 3;
const H_PADDING = 12;
const GRID_WIDTH = screenWidth - H_PADDING * 2;

const TILE = (GRID_WIDTH - GAP * (NUM_COLS - 1)) / NUM_COLS;
const DOUBLE_HEIGHT = TILE * 2 + GAP;

function WindowBlock({
  images,
  video,
  videoSide = "right",
}: {
  images: [MediaItem, MediaItem, MediaItem, MediaItem];
  video: MediaItem;
  videoSide?: "left" | "right";
}) {
  const LeftWindow = (
    <View style={styles.windowLeft}>
      <View style={styles.windowLeftRow}>
        <View style={[styles.tile, styles.square, { marginRight: GAP }]}>
          <Image source={images[0].source} style={styles.media} />
        </View>
        <View style={[styles.tile, styles.square]}>
          <Image source={images[1].source} style={styles.media} />
        </View>
      </View>

      <View style={[styles.windowLeftRow, { marginTop: GAP }]}>
        <View style={[styles.tile, styles.square, { marginRight: GAP }]}>
          <Image source={images[2].source} style={styles.media} />
        </View>
        <View style={[styles.tile, styles.square]}>
          <Image source={images[3].source} style={styles.media} />
        </View>
      </View>
    </View>
  );

  const TallVideo = (
    <View style={styles.windowRight}>
      <View style={[styles.tile, styles.tall]}>
        <Video
          source={video.source}
          style={styles.media}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />
        <View style={styles.videoBadge}>
          <Ionicons name="play" size={14} color="#fff" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.windowRow}>
      {videoSide === "left" ? (
        <>
          {TallVideo}
          <View style={{ width: GAP }} />
          {LeftWindow}
        </>
      ) : (
        <>
          {LeftWindow}
          <View style={{ width: GAP }} />
          {TallVideo}
        </>
      )}
    </View>
  );
}

export default function Search() {
  const items = useMemo<MediaItem[]>(
    () => [
      { id: "1", type: "image", source: require("../../assets/images/post1.jpg") },
      { id: "2", type: "image", source: require("../../assets/images/post2.jpg") },
      { id: "3", type: "image", source: require("../../assets/images/post3.jpg") },
      { id: "4", type: "image", source: require("../../assets/images/post4.jpg") },
      { id: "5", type: "video", source: require("../../assets/videos/searchvideo1.mp4") },

      { id: "6", type: "image", source: require("../../assets/images/post5.jpg") },
      { id: "7", type: "image", source: require("../../assets/images/post6.jpg") },
      { id: "8", type: "image", source: require("../../assets/images/post7.jpg") },
      { id: "9", type: "image", source: require("../../assets/images/post8.jpg") },
      { id: "10", type: "video", source: require("../../assets/videos/searchvideo2.mp4") },

      { id: "11", type: "image", source: require("../../assets/images/post9.jpg") },
      { id: "12", type: "image", source: require("../../assets/images/post10.jpg") },
      { id: "13", type: "image", source: require("../../assets/images/post11.jpg") },
      { id: "14", type: "image", source: require("../../assets/images/post12.jpg") },
      { id: "15", type: "video", source: require("../../assets/videos/searchvideo3.mp4") },
    ],
    []
  );

  // Build window blocks: 4 images + 1 video (repeated)
  const { blocks, remaining } = useMemo(() => {
    const blocks: { images: [MediaItem, MediaItem, MediaItem, MediaItem]; video: MediaItem }[] =
      [];
    let i = 0;

    while (i + 4 < items.length) {
      const group = items.slice(i, i + 5);
      const images = group.filter((x) => x.type === "image");
      const videos = group.filter((x) => x.type === "video");

      if (images.length === 4 && videos.length === 1) {
        blocks.push({
          images: [images[0], images[1], images[2], images[3]],
          video: videos[0],
        });
        i += 5;
      } else {
        break;
      }
    }

    return { blocks, remaining: items.slice(i) };
  }, [items]);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#6b7280" />
        <TextInput
          placeholder="Search with Meta AI"
          placeholderTextColor="#6b7280"
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {blocks.map((b, idx) => (
          <View key={`block-${idx}`} style={{ marginBottom: GAP }}>
            <WindowBlock
              images={b.images}
              video={b.video}
              videoSide={idx % 2 === 0 ? "right" : "left"} // 👈 alternate
            />
          </View>
        ))}

        {/* Leftovers (if any) */}
        {remaining.length > 0 && (
          <View style={styles.normalGrid}>
            {remaining.map((item, idx) => {
              const isLastCol = (idx + 1) % 3 === 0;

              return (
                <View
                  key={item.id}
                  style={[
                    styles.tile,
                    styles.square,
                    { marginRight: isLastCol ? 0 : GAP, marginBottom: GAP },
                  ]}
                >
                  {item.type === "video" ? (
                    <>
                      <Video
                        source={item.source}
                        style={styles.media}
                        resizeMode={ResizeMode.COVER}
                        shouldPlay
                        isLooping
                        isMuted
                      />
                      <View style={styles.videoBadge}>
                        <Ionicons name="play" size={14} color="#fff" />
                      </View>
                    </>
                  ) : (
                    <Image source={item.source} style={styles.media} />
                  )}
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  searchBar: {
    marginHorizontal: 12,
    marginTop: 6,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#f3f4f6",
  },
  searchInput: { flex: 1, fontSize: 16, color: "#111827" },

  scrollContent: {
    paddingHorizontal: H_PADDING,
    paddingBottom: 12,
    alignItems: "center",
  },

  // --- Window layout ---
  windowRow: {
    width: GRID_WIDTH,
    flexDirection: "row",
  },
  windowLeft: {
    width: TILE * 2 + GAP,
  },
  windowLeftRow: {
    flexDirection: "row",
  },
  windowRight: {
    width: TILE,
  },

  // --- Tiles ---
  tile: {
    overflow: "hidden",
    borderRadius: 1,
    backgroundColor: "#e5e7eb",
  },
  square: {
    width: TILE,
    height: TILE,
  },
  tall: {
    width: TILE,
    height: DOUBLE_HEIGHT,
  },
  media: { width: "100%", height: "100%" },

  videoBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  normalGrid: {
    width: GRID_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});