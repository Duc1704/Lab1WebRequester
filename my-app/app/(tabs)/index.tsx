import {StyleSheet, Button, View, TextInput} from 'react-native';
import React from 'react';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');

  return (
    <View style = {styles.containerColumn}>
      <View style = {styles.containerRow}>
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText}
          value = {text}
        />


        <Button
          title = "Click me"
          onPress = {() => alert("Stop pressing my button!" + text)}
          />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerColum: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  input: {
    justifyContent: 'center',

  }

});
