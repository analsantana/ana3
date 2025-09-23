import { Text, View, StyleSheet, Platform } from "react-native";
import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";



import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from "@/components/EmojiSticker";
import {GestureHandlerRootView}from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';

const PlaceholderImage = require('@/assets/images/rapunzel.jpg');

export default function Index() {
    const imageRef = useRef<any>(null);
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
      

    if (status === null) {
      requestPermission();
    }

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
    setIsModalVisible(true);
  };
  const onModalClose = async () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
      if (Platform.OS === 'web') {
    try {
          const localUri = await captureRef(imageRef, {
              height: 440,
              quality: 1,
          });
          await MediaLibrary.saveToLibraryAsync(localUri);
          if (localUri) {
            alert('Imagem salva com sucesso!');
          }
      } catch (e) {
        console.log(e);
      }
    } else {
        try {
          const dataUrl = await domtoimage.toJpeg(imageRef.current, {
            quality: 0.95,
            width: 320,
            height: 440,
          });

          let link = document.createElement('a');
          link.download = 'sticker-smash.jpeg';
          link.href = dataUrl;
          link.click();
        } catch (e) {
          console.log(e);
        }
      }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.text}>"Meu cabelo tem o poder do sol. Ele brilha quando eu canto."</Text>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
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
    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    </EmojiPicker>
    </GestureHandlerRootView>
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
    fontFamily: "Dancing Script",
    padding: 20,
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