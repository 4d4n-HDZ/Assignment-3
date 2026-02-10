import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function NavigationBar() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="feed"
      options={{
        tabBarIcon: ({color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="search"/>
      <Tabs.Screen name="shorts"/>
    </Tabs>
  )
}

