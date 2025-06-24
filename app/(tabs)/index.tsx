import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';


import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/rapunzel.jpg');

export default function Index() {
    const[selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      quality:1,
    });

    if (!result .canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
   } else{
    alert('você não selecionou imagem nenhuma');
   }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddStricker = () => {
    //we will implement this later
  };
  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Seja membro </Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ?(
        <View style={styles.optionsContainer}>
          <View style ={styles.opitonsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddStricker} />
            <IconButton icon="save" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ):(
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync} />
        <Button label="Use esta foto" onPress={()=> setShowAppOptions(true)} />
      </View>
    )}
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
 },
 optionsContainer: {
  position: 'absolute',
  bottom: 80,
 },
 opitonsRow: {
  alignItems: 'center',
  flexDirection: 'row',
 },
});