import { Text, View, StyleSheet } from "react-native";
export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Era uma vez Rapunzel, uma menina que vivia numa torre e sonhava com o mundo lá fora.
Um dia, ela saiu e viu o sol brilhar de verdade. Tudo ficou claro e bonito, como ela sempre sonhou.

Ao lado de Flynn, ela percebeu que a vida era cheia de luz e amor.
E juntos, descobriram que o mundo era mais mágico quando se tem alguém especial por perto.

Fim. ✨
</Text>
            
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
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: "Dancing Script"  

    },
   
});