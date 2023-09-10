import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper'; // Importe o Searchbar do react-native-paper

const CustomSearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View>
            <Searchbar
                placeholder="Digite sua pesquisa..."
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                onIconPress={handleSearch}
                onSubmitEditing={handleSearch}
            />
        </View>
    );
};

export default CustomSearchBar