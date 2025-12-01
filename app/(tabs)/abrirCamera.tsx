import * as ImagePicker from 'expo-image-picker';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function AbrirCamera() {
  const [photo, setPhoto] = useState<string | null>(null);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert("Permissão para acessar a câmera é necessária.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Abrir Câmera" 
        onPress={openCamera} 
        color="#c494ff" 
      />

      {photo && (
        <>
          <Text style={{ color: 'white', fontSize: 20, fontFamily: "Dancing Script", padding: 20}}>
            Foto capturada:
          </Text>
          <Image
            source={{ uri: photo }}
            style={{ width: 200, height: 200, marginTop: 10 }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a4375',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
