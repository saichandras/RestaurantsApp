import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

const ResultsDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.result.image_url}}/>
            <Text style={styles.foodName}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        borderRadius: 4,
        width: 250,
        height: 120,
        marginBottom: 5,
    },
    foodName: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;