import React from 'react';
import { View, Text, StyleSheet, Animated} from 'react-native'; 
import Colors from '../../../constant/Colors'  
import { Spinner } from 'native-base'  
    
export default class FooterLoading extends React.Component{
    constructor(props) {
        super(props);
        this.loadingAnimation = new Animated.Value(0);
    }

    spinAnimation = () => {
        this.loadingAnimation.setValue(0);
        Animated.sequence([
            Animated.timing(
                this.loadingAnimation,
                {
                    toValue: 1,
                    duration: 800
                }
            ),
                  Animated.timing(
                      this.loadingAnimation,
                     {
                          toValue: 0,
                          duration: 10000
                      }
              )
        ]).start(() => this.spinAnimation())
    }
    componentDidMount() {
        this.spinAnimation()
    }

    render() {
        const { newsItems, isNetworkConnection } = this.props;

        if (isNetworkConnection === false) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: newsItems ? 'white' : Colors.primary,}}>
                    
                    <Animated.Text style={{ color: Colors.noNetworkColor, opacity: this.loadingAnimation }}>Waiting for network connection...</Animated.Text>
                    <Text style={{ color: Colors.noNetworkColor, }}>Swipe down to refresh</Text>
                </View>
            )
        }
        else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: newsItems ? 'white' : Colors.primary,}}>
                    <Spinner color={Colors.primary} />
                    <Text style={{ color: Colors.primary }}>Fetching news articles...</Text>
                </View>
            )
        }
    }
    
};
    
const styles = StyleSheet.create({
    
});