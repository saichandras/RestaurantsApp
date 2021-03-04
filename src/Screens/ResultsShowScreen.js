import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = (props) => {

    const [result, setResult] = useState(null)
    const id = props.navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.root}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <Image style={styles.image} source={{uri: item}}/>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    image:{
        borderRadius: 4,
        marginVertical: 10,
        width: 300,
        height: 200
    },
    name:{
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    }
});

export default ResultsShowScreen;