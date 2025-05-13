import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';


import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
const PlaceholderImage = require('@/assets/images/rapunzel.jpg');

export default function Index() {
    const[selectedImage, setSelectedImage]=useState<string | undefined>(undefined);

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      quality:1,
    });

    if (!result .canceled){
      setSelectedImage(result.assets[0].uri);
   } else{
    alert('você não selecionou imagem nenhuma');
   }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Seja membro </Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync} />
        <Button label="Use esta foto" />
      </View>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a4375',
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Dancing Script"
  },  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

 footerContainer:{
    flex:1 / 3,
    alignItems: 'center',
 }
});