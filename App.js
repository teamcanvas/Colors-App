import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageTwo from './PageTwo';
import WelcomeScreen from './WelcomeScreen';
import PairScreen from './PairScreen';

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
                </Scene>
            </Router>
        );
    }
}



export default App;