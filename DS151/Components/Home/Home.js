import React from "react";
import { Menu, HamburgerIcon, Box, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomSearchBar from "../SearchBar/SearchBar";
import { StyleSheet, View } from 'react-native';
import tmdb from "../../src/api/tmdb";

function Home() {
    async function searchTitle(query) {
        try {
            const response = await tmdb.get('/search/movie', {
                params: {
                    query,
                    include_adult: false,
                }
            })
            const results = response.data.results;
            const titlesArray = [];
    
            results.forEach(result => {
                titlesArray.push(result.title);
            });
    
            console.log(titlesArray);
        } catch (error) {
            console.error('Erro:', error);
        }
    };
    
    
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
