import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [euros, setEuros] = useState('');
  const [pounds, setPounds] = useState(0);

  /* function calculate() {
    const result = euros.replace(',', '.') * 0.9;
    setPounds(result);
  } */

  function change(text) {
    setEuros(text);
    const result = text.replace(',', '.') * 0.9;
    setPounds(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput 
        style={styles.field}
        value={euros}
          onChangeText={text => change(text)}
          keyboard='decimal-pad'>
        </TextInput>
        <Text style={styles.field}>Pounds</Text>
        <Text style={styles.field}>{pounds.toFixed(2)}</Text>
        {/* <Button onPress={calculate} title="Calculate"></Button>     */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10
  }
});
