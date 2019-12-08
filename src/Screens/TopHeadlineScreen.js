import React from 'react';
import { View, Text, StyleSheet} from 'react-native'; 
import { Icon} from 'native-base'; 
import TopHeadline from '../Components/screenComponents/TopHeadline'

class TopHeadlineScreen extends React.Component {
    
    render(){
        return (
           <TopHeadline navigation={this.props.navigation}/>
        )
    }
    
};
    

export default TopHeadlineScreen; 
