import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageTwo from './PageTwo';
import WelcomeScreen from './WelcomeScreen';
import PairScreen from './PairScreen';
import MainScreen from './MainScreen';
import HumidityScreen from './HumidityScreen';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="scarlet"
                        component={WelcomeScreen}
                        title="Welcome!"
                        hideNavBar={true}     
                    />
                    <Scene
                        key="gray"
                        component={PageTwo}
                        title="Page Two"
                    />
                    <Scene
                    	key="pairDevice"
                    	component={PairScreen}
                    	title="Pair Screen"
                    	hideNavBar={true}
                	/>
                	<Scene
                		key="mainScreen"
                		component={MainScreen}
                		title="MainScreen"
                		hideNavBar={true}
                	/>
                    <Scene
                        key="humidityScreen"
                        component={HumidityScreen}
                        title="습도"
                    />
                </Scene>
            </Router>
        );
    }
}

export default App;