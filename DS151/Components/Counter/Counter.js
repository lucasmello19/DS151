import React, { useState } from 'react';
import styles from './CounterStyles';
import { View, Button } from 'react-native';
import { Text } from 'react-native-paper';

const Counter = () => {
    const [count, setCount] = useState(0);

    function countAdd() {
        const countAux = parseInt(count);
        setCount(countAux + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {"Contador"}
            </Text>
            <Button
                title='Conta +1'
                onPress={countAdd}
            />
            <Text style={styles.result}>
                {count}
            </Text>
        </View>
    )
}

export default Counter
