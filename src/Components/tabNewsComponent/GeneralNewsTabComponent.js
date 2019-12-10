import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'; 
import Colors from '../../../constant/Colors'   
    
export default class GeneralNewsTabComponent extends React.Component {
    render(){
        return (
            <TouchableOpacity style={Styles.rootContainer} >
                <View style={Styles.newsContainer}>
                    
                </View>
                <View style={Styles.newsContainer}>

                </View>
                <View style={Styles.newsContainer}>

                </View>
            </TouchableOpacity>
        )
    }
    
};
    
const Styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        elevation: 15,


    },
    newsContainer: {
        backgroundColor: 'white',
        height: '33%',
        width:'95%',
        marginVertical: 7,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor:Colors.primary,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    
});