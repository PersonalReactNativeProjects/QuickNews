import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constant/Colors'

export default class SportsNewsTabComponent extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Sports News Tab Component</Text>
            </View>
        )
    }

};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryFade
    }
});