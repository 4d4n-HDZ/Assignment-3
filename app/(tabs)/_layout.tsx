import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";


export default function TabLayout() {
  return (
    <>
      <StatusBar translucent style="dark" />
      <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          height: 40,
          paddingBottom: 6,
          paddingTop: 6,
        },
        
      }}>
        <Tabs.Screen name="feed"
        options={{
          tabBarIcon: ({color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}/>
          ),
          
        }}/>
        <Tabs.Screen name="shorts"
        options={{
          tabBarIcon: ({color, size, focused }) => (
            <Ionicons
              name={focused ? "videocam-outline" : "videocam-outline"}
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
        <Tabs.Screen name="index"
        options={{
          tabBarIcon: ({color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}/>
          ),
        }}/>
      </Tabs>
    </>
  )
}

