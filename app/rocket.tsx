import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  View,
  StyleSheet,
} from "react-native";
import { linear } from "react-native-reanimated";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

type Props = {
  launchSignal: number; 
};

export default function RocketTakeOff({ launchSignal }: Props) {
  const ROCKET_WIDTH = 200;
  const ROCKET_HEIGHT = 700;

  const startY =screenHeight + ROCKET_HEIGHT; 
  const endY = -ROCKET_HEIGHT;                 

  const translateY = useRef(new Animated.Value(startY)).current;

  useEffect(() => {
    translateY.stopAnimation();
    translateY.setValue(startY);

    Animated.timing(translateY, {
      toValue: endY,
      duration: 4200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [launchSignal]);

  return (
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            zIndex: 9999,
            elevation: 9999,
          },
        ]}
      >
        <Animated.Image
          source={require("../assets/images/rocket.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: ROCKET_WIDTH,
            height: ROCKET_HEIGHT,
            left: (screenWidth - ROCKET_WIDTH) / 2,
            transform: [
              { translateY }
            ],
      
          }}
        />
      </View>
    );
}