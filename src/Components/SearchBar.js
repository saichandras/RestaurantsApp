import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';


const SearchBar = (props) => {
    return (
        <View style={styles.root}>
            <Feather name="search" style={styles.searchIconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={props.term}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 17,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
    },
    searchIconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 6,
    }
});

export default SearchBar;