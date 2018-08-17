import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Navigator} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default class MainScreen extends Component {
	static get defaultProps() {
    return {
      title: 'MainScreen'
    };
  }
    render() {
    return (
    	<View style={styles.main}>
    		<Text style={styles.title}>mintboard_7350</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 30,
		paddingLeft: 40,
		paddingRight: 40,
	},
	content: {
		flex: 1,
	}
	title: {
  	fontSize: 23,
  	fontWeight: 'bold',
  	color: '#4a4a4a',
  	fontFamily: "NotoSansKR-Regular"
  },
});