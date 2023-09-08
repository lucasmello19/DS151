import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Sistema de Notas"
                onPress={() => navigation.navigate('MediaCalculator')}
            />
            <View style={styles.buttonSpace} />
            <Button
                title="Sistema Contador"
                onPress={() => navigation.navigate('Counter')}
            />
            <View style={styles.buttonSpace} />
            <Button
                title="Color List"
                onPress={() => navigation.navigate('ColorList')}
            />
              <View style={styles.buttonSpace} />
            <Button
                title="Galeria"
                onPress={() => navigation.navigate('Galeria')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSpace: {
        marginVertical: 10,
    },
});
