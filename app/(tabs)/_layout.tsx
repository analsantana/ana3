import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'yellow',
        headerStyle: { backgroundColor: '#6a4375' },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#6a4375' }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'sunny' : 'sunny-outline'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ focused }) => (
            <Feather name={focused ? 'book' : 'book-open'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Descobertas',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'bulb-sharp' : 'bulb-outline'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="buscaCEP"
        options={{
          title: 'CEP',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="abrirCamera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'camera' : 'camera-outline'} size={24} color="yellow" />
          ),
        }}
      />
    </Tabs>
  );
}
