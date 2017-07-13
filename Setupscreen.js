/**
 * Created by Jill - Offline on 2017-07-13.
 */


import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Text, TextInput, View } from 'react-native';


export default class Setupscreen extends Component {

    onButtonPress(){
        //check that all fields are filled


        //navigate to other view
        this.props.navigator.push( {id: 'Consumption'})
        //Alert.alert('You tapped the button!')
    }

    render(){

        return (
            <View style={{padding: 10}}>
                <Button
                    onPress={() => { this.onButtonPress() }}
                    title="OK"
                />
            </View>
        );

    }

}

module.exports = Setupscreen;