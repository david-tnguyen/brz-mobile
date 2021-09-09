import * as React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default HomeScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
      />
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
});