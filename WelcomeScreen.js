/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Navigator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingAction } from 'react-native-floating-action';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Actions } from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props> {
	static get defaultProps() {
    return {
      title: 'Main'
    };
  }

  render() {
    return (
    	<View style={styles.main}>
    		<Text onPress={() => Actions.gray()} style={styles.title}>
				welcome.
			</Text>
			<Text style={styles.content}>
				지금 바로 나의 mintboard와{"\n"}나의 디바이스를 연결할 수 있습니다.
			</Text>

			<LinearGradient
          		colors={['#5ed1b7', '#0ddf7f']}
          		start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          		style={styles.bottomView}
        		>
			</LinearGradient>

			<View style={styles.bottomView}>
			</View>

      <FloatingAction
      />   

    	</View>
    );
  }
}

SampleFunction = () => {
	Alert.alert("Test Alert");
}

const styles = StyleSheet.create({
  main: {
  	flex: 1,
  	paddingTop: getStatusBarHeight() + 30,
  	paddingLeft: 40,
  	paddingRight: 40,
  	backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
  	fontSize: 40,
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
  bottomView:{
    width: '200%', 
    height: 270,
    transform: [{ rotate: '25deg'}],
    position: 'absolute',
    bottom: -170,
    left: -100,
    },
});
