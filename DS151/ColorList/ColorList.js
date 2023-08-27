import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

function ColorList() {
    const [colors, setColors] = useState([])

    const addColor = () => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 225);
        const blue = Math.floor(Math.random() * 255);
        setColors(prevColors => [...prevColors, `rgb(${red},${green},${blue})`])
    };

    return (
        <View>
            <Button title="Adiciona Cor" onPress={() => addColor()} />
            <FlatList
                data={colors}
                horizontal={true}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: item,
                            width: 100,
                            height: 100,
                            margin: '10px'
                        }}
                    ></View>
                )}
            />
        </View>
    )
}

export default ColorList
