import React from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Loader } from './src/components/Loader';

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      address: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._handlePress()}
            title="Hello" accessibilityLabel="Tap on Me">
          </Button>
        </View>
      </View>
    );
  }

  _handlePress() {
    Alert.alert(
      'ทดสอบ Alert',
      'รายละเอียด Alert',
      [
        {
          text: 'Ask me later', onPress: () => 
          console.log('Ask me later pressed')
        },
        {
          text: 'Cancel', onPress: () => 
          console.log('Cancel Pressed'), style: 'cancel'
        },
        {
          text: 'OK', onPress: () => 
          console.log('OK Pressed')
        },
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});
