import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Router />
      </View>
    );
  }
}

export default App;