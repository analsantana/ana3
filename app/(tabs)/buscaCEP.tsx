import {Button, StyleSheet, Text, TextInput, View} from 'react-native'; 
import {useBuscaCep} from '@/hooks/useBuscaCep'; // Importe o hook 
import AbrirCamera from './abrirCamera';

export default function BuscaCEP() { 
    const { cep, setCep, endereco, buscarCEP} =  useBuscaCep(); // Usando a hook 

return ( 
    <View style={styles.container}> 
        <Text style={{ color: 'white', fontSize: 18, fontFamily: "Dancing Script", padding: 20,}}>Consulte seu CEP</Text> 

<TextInput 
    style={styles.textinput}
    value={cep}
    onChangeText = {setCep} 
    placeholder = "Digite o CEP" 
    keyboardType = "numeric" 
/>

<Button 
    color='#c494ff'
    title="Buscar" 
    onPress = {buscarCEP} 
/> 

{endereco.logradouro !== '' && (
    <View style = {styles.result}> 
        <Text style={{ color: '#fff' }}>Logradouro: {endereco.logradouro}</Text> 
        <Text style={{ color: '#fff' }}>Bairro: {endereco.bairro}</Text> 
        <Text style={{ color: '#fff' }}>Cidade: {endereco.localidade}</Text> 
        <Text style={{ color: '#fff' }}>Estado: {endereco.uf}</Text> 
    </View> 
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

    textinput: { 
        width: '80%', 
        borderWidth: 2, 
        borderColor: '#8b62a3',
        padding: 8, 
        marginVertical: 10, 
        color: '#fff',
    },

    result: { 
        marginTop: 20, 
        padding: 16, 
        borderWidth: 2, 
        borderColor: '#8b62a3', 
        borderRadius: 8, 
    },
    
});