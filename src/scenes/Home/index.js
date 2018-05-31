import React from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Loader } from '../../components/Loader';
import { AlertConfirmation } from '../Home/components';

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <ScrollView style={{ marginTop: 20 }}>
            <AlertConfirmation onPress={() => this._handlePress()}
                                title="Confirmation" accessibilityLabel="Tap on Me">
            </AlertConfirmation>
        </ScrollView>
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
