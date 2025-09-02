import {useState} from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable} from 'react-native';
import {Image} from 'expo-image';

type Props = {
    onSelect: (emoji: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({onSelect, onCloseModal}: Props) {
    const[emoji] = useState<ImageSourcePropType[]>([
        require('../assets/images/ima1.png'),
        require('../assets/images/ima2.png'),
        require('../assets/images/ima3.png'),
        require('../assets/images/ima4.png'),
        require('../assets/images/ima5.png'),
        require('../assets/images/ima6.png'),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji}
            contentContainerStyle={styles.ListContainer}
            renderItem={({item, index}) => (
                <Pressable 
                onPress={() => {
                onSelect(item);
                onCloseModal();
            }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    );

}

const styles = StyleSheet.create({
    ListContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
