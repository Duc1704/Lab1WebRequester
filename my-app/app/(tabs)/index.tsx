import {StyleSheet, Button, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style = {styles.containerColumn}>
      <View style = {styles.containerRow}>
        <Button
          title = "Click me"
          onPress = {() => alert("Stop pressing my button!")}
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
  }

});
