import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
    initialRouteName="index"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor: "#888",
      tabBarStyle: { backgroundColor: "#fff"},
      tabBarIconStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee",
        height: 60,
      }
    }}>
      <Tabs.Screen name="index"
      options={{
        tabBarIcon: ({color, size, focused }) => (
          <Ionicons
            name={focused ? "home" : "home-outline"}
            size={size}
            color={color}/>
        ),
      }}/>
      <Tabs.Screen name="feed"
      options={{
        tabBarIcon: ({color, size, focused }) => (
          <Ionicons
            name={focused ? "add-circle" : "add-circle-outline"}
            size={size}
            color={color}/>
        ),
      }}/>
      <Tabs.Screen name="search"
      options={{
        tabBarIcon: ({color, size, focused }) => (
          <Ionicons
            name={focused ? "search" : "search-outline"}
            size={size}
            color={color}/>
        ),
      }}
      />
      <Tabs.Screen name="shorts"
      options={{
        tabBarIcon: ({color, size, focused }) => (
          <Ionicons
            name={focused ? "person" : "person-outline"}
            size={size}
            color={color}/>
        ),
      }}/>
    </Tabs>
  )
}

