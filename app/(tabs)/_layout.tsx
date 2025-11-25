import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

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
            <AntDesign name={focused ? 'questioncircle' : 'questioncircleo'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Descobertas',
          tabBarIcon: ({ focused }) => (
            <AntDesign name={focused ? 'downcircle' : 'downcircleo'} size={24} color="yellow" />
          ),
        }}
      />

      <Tabs.Screen
        name="buscaCEP"
        options={{
          title: 'CEP',
          tabBarIcon: ({ focused }) => (
            <AntDesign name={focused ? 'exclamationcircle' : 'exclamationcircleo'} size={24} color="yellow" />
          ),
        }}
      />
    </Tabs>
  );
}
