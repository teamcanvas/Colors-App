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
    		<View style={styles.titleview}>
    			<Text style={styles.title}>mintboard_7350</Text>
    			<View style={styles.circle}></View>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#ffffff',
		flex: 1,
		paddingTop: getStatusBarHeight() + 40,
		paddingLeft: 40,
		paddingRight: 40,
	},
	titleview: {
		flex: 1,
		flexDirection: 'row',
	},
	title: {
  		fontSize: 23,
  		fontWeight: 'bold',
  		color: '#4a4a4a',
  		fontFamily: "NotoSansKR-Regular",
  },
  	circle: {
  		width: 15,
  		height: 15,
  		borderRadius: 50,
  		backgroundColor: '#5ed1b7',
  		marginLeft: 10,
  		marginTop: 10,
  },
});