import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, View, Alert, TouchableOpacity, Navigator} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

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

    		<View style={styles.data}>
    			<LinearGradient
          		colors={['#53a0fd', '#3023ae']}
          		start={{x: 0.0, y:0.0}} end={{x: 1.0, y: 1.0}}
          		style={styles.content}>

          		<Text style={styles.contentTitle}>공기질</Text>
          		<Text style={styles.contentResult}>96</Text>
          		<Text style={styles.contentUnit}>ppb</Text>
			</LinearGradient>
			<LinearGradient
          		colors={['#757575', '#333333']}
          		start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          		style={styles.content}
        		>
        		<Text style={styles.contentTitle}>이산화탄소</Text>
          		<Text style={styles.contentResult}>173</Text>
          		<Text style={styles.contentUnit}>ppm</Text>
			</LinearGradient>
    		</View>
    		<View style={styles.data}>
    			<LinearGradient
          		colors={['#fad961', '#f76b1c']}
          		start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          		style={styles.content}
        		>
        		<Text style={styles.contentTitle}>기압계</Text>
          		<Text style={styles.contentResult}>993</Text>
          		<Text style={styles.contentUnit}>hPa</Text>
			</LinearGradient>
			<LinearGradient
          		colors={['#b4ec51', '#429321']}
          		start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          		style={styles.content}
        		>
        		<Text style={styles.contentTitle}>습도</Text>
          		<Text style={styles.contentResult}>64%</Text>
			</LinearGradient>
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
		flex: 0.2,
		flexDirection: 'row',
		alignSelf:'baseline',
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
  	data: {
  		height: 170,
        flexDirection: 'row',
        justifyContent: 'center',
  	},
  	content: {
  		width: 150,
  		height: 150,
  		borderRadius: 20,
  		marginLeft: 10,
  		marginRight: 10,
  		padding: 23,
  	},
  	contentTitle: {
  		color: '#ffffff',
  		fontSize: 18,
  		fontFamily: "NotoSansKR-Medium",
  	},
  	contentResult: {
  		color: '#ffffff',
  		fontSize: 35,
  		top: 15,
  		fontFamily: "NotoSansKR-Bold",
  	},
  	contentUnit: {
  		color: '#ffffff',
  		fontSize: 14,
  		marginTop: 8,
  		fontFamily: "NotoSansKR-Bold",
  	},
});