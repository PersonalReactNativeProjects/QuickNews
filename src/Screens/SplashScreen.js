import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Splash from '../Components/screenComponents/Splash';




class SplashScreen extends Component {

    componentDidMount() {
        this.navigateToDashboardScreenHandler()
    }

    // This is navigate to the dasboard navigation/screen after 5 seconds
    navigateToDashboardScreenHandler = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Dashboard');
        }, 5000);
    }

    render() {
        return (
            <Splash />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SplashScreen;