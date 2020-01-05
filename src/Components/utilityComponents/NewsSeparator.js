import React from 'react';
import { View, Text, StyleSheet} from 'react-native'; 
import Colors from '../../../constant/Colors'  
    
export default class NewsSeparator extends React.Component {
    render() {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: Colors.primary,

                }}
            />
        )
    }
}
    
const styles = StyleSheet.create({
    
});
    