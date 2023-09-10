import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SearchBar from '../SearchBar/SearchBar';

export default function Home({ navigation }) {
    const handleSearch = (searchText) => {
        // Implemente a lógica de busca aqui com base no searchText

    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <SearchBar onSearch={handleSearch} />
            </View>
            <View style={styles.buttonContainer}>
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
                <Button title="Galeria" onPress={() => navigation.navigate('Galeria')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSpace: {
        marginVertical: 10,
    },
});
