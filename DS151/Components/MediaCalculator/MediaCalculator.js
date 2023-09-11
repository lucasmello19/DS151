import React, { useState } from 'react';
import styles from './MediaCalculatorStyles';
import { View, TextInput, Button } from 'react-native';
import { Text } from 'react-native-paper';

const MediaCalculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    function calcularMedia() {
        const nota1 = parseFloat(input1);
        const nota2 = parseFloat(input2);
        const result1 = (nota1 + nota2) / 2;

        setResult('O resultado da média é: ' + result1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {"Calculadora de média"}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o primeiro número"
                keyboardType="numeric"
                value={input1}
                onChangeText={text => setInput1(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o segundo número"
                keyboardType="numeric"
                value={input2}
                onChangeText={text => setInput2(text)}
            />
            <Button
                title='Calcular Média'
                onPress={calcularMedia}
            />
            <Text style={styles.result}>
                {result}
            </Text>
        </View>
    )
}

export default MediaCalculator
