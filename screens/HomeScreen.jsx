import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { fetchSymbols } from '../api/search_symbols';

export default HomeScreen = ({ navigation }) => {
  const [symbols, setSymbols] = useState([]);

  const getSymbols = async (text) => {
    const results = await fetchSymbols(text);
    setSymbols(results);
  }

  const debouncedHandleChangeText = useCallback(
    debounce(getSymbols, 500)
  , []);

  return (
    <View>
      <TextInput
        onChangeText={debouncedHandleChangeText}
        style={styles.input}
      />
      {symbols && <View>
        {symbols.length > 0 && symbols.map((symbol) => (
          <View
            key={symbol.ticker}
            onPress={() => navigation.navigate('Details')}
            style={styles.symbolContainer}
          >
            <Text onPress={() => navigation.navigate('Details')}>{symbol.name}</Text>
            <Text>{symbol.ticker}</Text>
          </View>
        ))}
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  symbolContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 10
  }
});