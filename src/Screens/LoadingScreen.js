import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from '../Components/screenComponents/Loading';




class LoadingScreen extends Component {

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
            <Loading />
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

export default LoadingScreen;