import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa,adicionarTarefa,removerTarefa} = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Tarefas</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite uma descoberta..."
                    value={novaTarefa}
                    placeholderTextColor="white" // 
                    onChangeText={setNovaTarefa}
                />
                <Button color="#c494ff" title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                                <Ionicons name={"close-circle"} color={"#ccc"} size={24}/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, backgroundColor: '#6a4375' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color:'white' },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { flex:1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10, color:'white'},
    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#8b62a3', 
        padding: 20, 
        marginBottom: 5, 
        borderRadius: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowRadius: 3, 
        elevation: 2 
    },
    tarefaTexto: { fontSize: 16, color:'white' },
    remover: { fontSize: 18, color: 'red' },
})
    