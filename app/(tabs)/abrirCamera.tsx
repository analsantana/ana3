import { launchCamera } from 'react-native-image-picker';
import {Button, View, Image, Text} from 'react-native';
import {useState} from 'react';
import { StyleSheet } from 'react-native';


export default function AbrirCamera() {
  const [photo, setPhoto] = useState<string | null>(null);

 const openCamera = () => {
  launchCamera(
    {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    },
    (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou');
      } else if (response.errorCode) {
        console.log('Erro: ', response.errorMessage);
      } else {
        const uri = response.assets?.[0]?.uri;

        if (uri) {
          setPhoto(uri);
        }
      }
    }
  );
};

  return (
    <View style={styles.container} >
      <Button title="Abrir Câmera" onPress={openCamera} />

      {photo && (
        <>
          <Text>Foto capturada:</Text>
          <Image
            source={{uri: photo}}
            style={{width: 200, height: 200, marginTop: 20}}
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
