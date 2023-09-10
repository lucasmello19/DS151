import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import cat1 from './../assets/cat1.jpg';
import cat2 from './../assets/cat2.jpg';
import cat3 from './../assets/cat3.jpg';
import cat4 from './../assets/cat4.jpg';
import cat5 from './../assets/cat5.png';
import cat6 from './../assets/cat6.jpg';
import cat7 from './../assets/cat7.jpg';
import cat8 from './../assets/cat8.jpg';
import cat9 from './../assets/cat9.jpg';
import cat10 from './../assets/cat10.jpg';
import cat11 from './../assets/cat11.jpg';
import cat12 from './../assets/cat12.jpg';
import cat13 from './../assets/cat13.jpg';
import cat14 from './../assets/cat14.jpg';
import cat15 from './../assets/cat15.jpg';

const imagens = [
    { id: '12', url: cat12 },
    { id: '13', url: cat13 },
    { id: '14', url: cat14 },
    { id: '1', url: cat1 },
    { id: '2', url: cat2 },
    { id: '3', url: cat3 },
    { id: '4', url: cat4 },
    { id: '5', url: cat5 },
    { id: '6', url: cat6 },
    { id: '7', url: cat7 },
    { id: '8', url: cat8 },
    { id: '9', url: cat9 },
    { id: '10', url: cat10 },
    { id: '11', url: cat11 },
    { id: '15', url: cat15 },
];

function getRandomSize() {
    const minWidth = 100;
    const maxWidth = 500;
    const minHeight = 100;
    const maxHeight = 250;

    const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    return { width: randomWidth, height: randomHeight };
}

function Galeria() {
    const renderItem = ({ item }) => {
        const { width, height } = getRandomSize();

        return (
            <View style={[styles.item, { width, height }]}>
                <Image source={item.url} style={styles.image} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={imagens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        margin: 10,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
})

export default Galeria;
