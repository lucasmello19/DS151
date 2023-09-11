import { Menu, HamburgerIcon, Box, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomSearchBar from "../SearchBar/SearchBar";
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import tmdb from "../../src/api/tmdb";
import React, { useState } from 'react';
import { Text } from 'react-native-paper';

function Home() {
    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [feedbackSearch, setFeedback] = useState('');


    async function searchTitle(query) {
        setLoading(true);
        setTitles([])
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
            if (titlesResult.length === 0) {
                setFeedback('nenhuma busca foi encontrada')
            } else {
                setFeedback('')
            }
            setLoading(false);
        } catch (error) {
            console.error('Erro:', error);
            setLoading(false);
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
                <View style={styles.activityIndicator}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <Text>{feedbackSearch}</Text>
                    )}
                </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        alignItems: 'center',
        paddingTop: 50,
    },
    searchBarContainer: {
        padding: 20,
    },

});


export default Home
