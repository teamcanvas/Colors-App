import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Navigator} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Actions } from 'react-native-router-flux';

export default class PairScreen extends Component {
	static get defaultProps() {
    return {
      title: 'PairDevice'
    };
  }

  render() {
    return (
    	<View style={styles.main}>
    		<Text style={styles.title}>pair device.</Text>
    		<Text style={styles.content}>나의 디바이스와 mintboard를 연결하세요.{"\n"}Bluetooth가 활성화 되었습니다.</Text>

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
  	backgroundColor: 'transparent',
  },
  title: {
  	fontSize: 30,
  	fontWeight: 'bold',
  	color: '#4a4a4a',
  	fontFamily: "NotoSansKR-Regular"
  },
  content: {
  	color: '#9b9b9b',
  	fontSize: 15,
  	textAlign: 'left',
  	marginTop: 7,
  	fontFamily: "NotoSansKR-Regular"
  },
});
