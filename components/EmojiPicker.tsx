import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function EmojiPicker({isVisible, onClose, children}: Props) {
    return(
        <View>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                       <Text style={styles.title}>Escolha um Emoji</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name='close' color='#fff'  size={24}/>
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
            </View>
    );
}

const styles = StyleSheet.create({
    modalContent:{
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
titleContainer:{
    height: '16%',
    backgroundColor: '#464C55',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: 'space-between',
},
title: {
    color: '#fff',
    fontSize: 16,
}
});