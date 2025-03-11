import {StyleSheet, Button, View, TextInput, Text} from 'react-native';
import React, { useState } from 'react';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('https://reactnative.dev/movies.json');

  const [webData, setwebData] = useState(""); // States and react hooks
  const request = new XMLHttpRequest();

  function handlePressButtonAsyn() {
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', + request.responseText);
        setwebData("Status: " + request.status + " " + request.statusText + " " + request.responseText + " " + request.response);

      } else {
        console.warn('error');
        setwebData("Error: " + request.status + " " + request.statusText + " " + request.responseText);
      }
    };
    request.open('GET', text);
    request.send();
  }

  return (
    <View style = {styles.containerColumn}>
      <View style = {styles.containerRow}>
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText}
          value = {text}
        />


        <Button
          title = "Go Request"
          onPress = {() => handlePressButtonAsyn()}
          />
      </View>
      <Text> {webData}</Text>
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
