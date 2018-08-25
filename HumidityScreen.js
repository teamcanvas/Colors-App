import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Navigator} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Actions } from 'react-native-router-flux';

export default class HumidityScreen extends React.Component {
	static get defaultProps() {
    return {
      title: '습도'
    };
  }

  render() {
    return (
    	<View style={styles.main}>

    	</View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: getStatusBarHeight() + 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  });