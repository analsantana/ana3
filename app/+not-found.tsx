import {  View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: 'Oops! Não encontrado' }}></Stack.Screen>
    <View style={styles.container }>
      <Link href= "/" style={styles.button}>
   Não encontrado
      </Link> 
    </View>
    </>
  );
}
const styles = StyleSheet. create ({
  container:{
        flex: 1,
        backgroundColor: '#d8b4e2 ',
        justifyContent: "center",
        alignItems: "center",
  },
  text:{
      color: 'white'
   },
   button:{
    fontSize:20,
    textDecorationLine:'underline',
    color: 'white',
   }
});