import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from "react-navigation";

const ResultsList = (props) => {

    if(props.results.length <= 0){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', {id : item.id, name: item.name})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 8,
    }
});

export default withNavigation(ResultsList);