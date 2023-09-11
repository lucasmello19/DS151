import { Menu, HamburgerIcon, Box, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomSearchBar from "../SearchBar/SearchBar";
import { StyleSheet, View, FlatList, Text } from 'react-native';
import tmdb from "../../src/api/tmdb";
import React, { useState, useEffect } from 'react';

function Home() {
    const [titles, setTitles] = useState([]);

    async function searchTitle(query) {
        const titlesResult = [];
        try {
            const response = await tmdb.get('/search/movie', {
                params: {
                    query,
                    include_adult: false,
                }
            })
            const results = response.data.results;

            results.forEach(result => {
                titlesResult.push(result.title);
            });
            setTitles(titlesResult)
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        // Este efeito será acionado após a atualização de 'titles'
        console.log('Estado atualizado:', titles);
    }, [titles]);

    const navigation = useNavigation();


    return (
        <Box w="100%" p={4}>
            <Box flexDirection="column" alignItems="flex-start">
                <Menu w="190" trigger={triggerProps => {
                    return (
                        <Pressable {...triggerProps}>
                            <HamburgerIcon />
                        </Pressable>
                    );
                }}>
                    <Menu.Item
                        onPress={() => navigation.navigate('MediaCalculator')}
                        children="Sistema de Notas"
                    />
                    <Menu.Item
                        onPress={() => navigation.navigate('Counter')}
                        children="Sistema Contador"
                    />
                    <Menu.Item
                        onPress={() => navigation.navigate('ColorList')}
                        children="Color List"
                    />
                    <Menu.Item
                        onPress={() => navigation.navigate('Galeria')}
                        children="Galeria"
                    />
                </Menu>
            </Box>

            <View style={styles.searchBarContainer}>
                <CustomSearchBar onSearch={(searchText) => {
                    searchTitle(searchText);
                }} />
                <FlatList
                    data={titles}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10 }}>
                            <Text>{item}</Text>
                        </View>
                    )}
                />
            </View>
        </Box>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        padding: 20,
    },
});


export default Home
