import React from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import routeConfig from '../../config/routeConfig';

export default class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { Main, ...routes } = routeConfig;
    return (
        <ScrollView style={{ marginTop: 20 }}>
            {Object.keys(routes).map(route => (
                <Button
                    key={route}
                    title={route}
                    onPress={() => this.props.navigation.navigate(route)}
                />
            ))}
        </ScrollView>
    );
  }
};