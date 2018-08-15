/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    	<View style={styles.main}>
    		<Text style={styles.title}>
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

			<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'#4b4b4b',
       alignItems:'center',
       justifyContent:'center',
       width:64,
       height:64,
       backgroundColor:'#4b4b4b',
       borderRadius:100,
       position: 'absolute',
       bottom: 24,
       right: 24
     }}
     onPress={() => {
    Alert.alert('You tapped the button!');
  }}
 >
   {/* <Icon name={"chevron-right"}  size={30} color="#01a699" /> */}
 </TouchableOpacity>

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
  	paddingTop: 40,
  	paddingLeft: 24,
  	paddingRight: 24
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
    bottom: -180,
    left: -100,
    },
});

const actions = [{
    text: 'Accessibility',
    //icon: require('./images/ic_accessibility_white.png'),
    name: 'bt_accessibility',
    position: 2
  }, {
    text: 'Language',
    //icon: require('./images/ic_language_white.png'),
    name: 'bt_language',
    position: 1
  }, {
    text: 'Location',
    //icon: require('./images/ic_room_white.png'),
    name: 'bt_room',
    position: 3
  }, {
    text: 'Video',
    //icon: require('./images/ic_videocam_white.png'),
    name: 'bt_videocam',
    position: 4
  }];
