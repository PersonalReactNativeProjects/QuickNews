//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../../../constant/Colors'



export default class CustomDrawerContent extends Component {
    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.proileImage =
            'https://i.pravatar.cc/150?img=59';
        
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Top Headline',
                screenToNavigate: 'Headline',
            },
            {
                navOptionThumb: 'football',
                navOptionName: 'Livescores',
                screenToNavigate: 'Livescores',
            },
            
            
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>

                {/* Header of the container */}
                <View style={styles.Header}>
                    {/*Top Large Image */}
                    {/* <Image
                        source={{ uri: this.proileImage }}
                        style={styles.sideMenuProfileIcon}
                    /> */}
                </View>
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 5,
                        backgroundColor: '#101D42',
                        //marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                                borderBottom: 5, 
                                borderBottomColor: '#851b19'
                            }}
                            key={key}
                            onPress={() => {
                                global.currentScreenIndex = key;
                                this.props.navigation.navigate(item.screenToNavigate);
                            }}>
                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} style={{ color: global.currentScreenIndex === key ? Colors.accent : Colors.primary, fontSize: global.currentScreenIndex === key ? 27 : 25}}
                                    onPress={() => {
                                        global.currentScreenIndex = key;
                                        this.props.navigation.navigate(item.screenToNavigate);
                                    }}/>
                            </View>
                            <View onPress={() => {
                                global.currentScreenIndex = key;
                                this.props.navigation.navigate(item.screenToNavigate);
                            }}>
                                <Text style={{ fontSize: global.currentScreenIndex === key ? 15 : 13, fontWeight: 'bold', fontFamily: 'serif', fontStyle:'italic', color: global.currentScreenIndex === key ? Colors.primary : Colors.accent }} onPress={() => {
                                    global.currentScreenIndex = key;
                                    this.props.navigation.navigate(item.screenToNavigate);
                                }}>
                                    {item.navOptionName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e2e2e2',
        //paddingTop: 20,
    },
    sideMenuProfileIcon: {
        //resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
    Header:{
        height: '12%',
        backgroundColor: Colors.primary,
        alignItems: 'center',

    }
});