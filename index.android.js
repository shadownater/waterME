/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text, TextInput, View, Navigator } from 'react-native';
import { StackNavigator, } from 'react-navigation';

var Setupscreen = require('./Setupscreen.js');
var Consumption = require('./Consumption.js');

class firstProject extends Component {

    //this video helped with navigation: https://www.youtube.com/watch?v=EPyhI4AQ4bs

   navigatorRenderScene(route, navigator){
        switch(route.id){
            case 'Setupscreen':
                return(<Setupscreen navigator = {navigator} />);
            case 'Consumption':
                return(<Consumption navigator = {navigator} />);
        }

   }


    render() {
        return(
            <Navigator initialRoute = {{ id: 'Setupscreen' }}
        renderScene = {this.navigatorRenderScene}
        />
        )

    }
}


/*



 */


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
AppRegistry.registerComponent('firstProject', () => firstProject);
