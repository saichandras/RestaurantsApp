import React, {useState} from 'react';
import {View, StyleSheet, Text, ToastAndroid, Platform, Alert, ScrollView} from 'react-native';
import SearchBar from "../Components/SearchBar";
import userResults from "../Hooks/userResults";
import ResultsList from "../Components/ResultsList";

function notifyMessage(msg: string) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        Alert.alert(msg);
    }
}

const SearchScreen = (props) => {

    const [term, setTerm] = useState('');
    const [searchAPI, errorMessage, results] = userResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price);
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{notifyMessage(errorMessage)}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Big Pricer'/>
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;