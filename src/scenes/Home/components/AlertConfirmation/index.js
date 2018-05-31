import React from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default class AlertConfirmation extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Button style={styles.buttonContainer} {...this.props}></Button>
    );
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
