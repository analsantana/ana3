
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
  <Tabs
    screenOptions={{
        tabBarActiveTintColor: 'yellow',
        headerStyle:{
        backgroundColor:'#6a4375'
        },
        headerShadowVisible: false,
        headerTintColor:'#fff',
        tabBarStyle:{
        backgroundColor:'#6a4375'
        }

    }}
    >
    <Tabs.Screen 
    name="index"
    options={{
        title: 'inicio',
        tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'sunny' : 'sunny-outline'}size={24} color="yellow" />
        ),
    }}
    />
    <Tabs.Screen
    name="about"
    options={{
        title: 'Sobre',
        tabBarIcon: ({ color, focused}) =>  (
            <AntDesign name={focused ? 'questioncircle' : 'questioncircleo'} color='yellow' size={24}/> 
        ),
    }}
    />

<Tabs.Screen
    name="toDoList"
    options={{
        title: 'Descobertas',
        tabBarIcon: ({ color, focused}) =>  (
           <AntDesign name={focused ? 'downcircle' : 'downcircleo'} color='yellow' size={24}/> 
        ),
    }}
    />
  </Tabs>
  );
}
