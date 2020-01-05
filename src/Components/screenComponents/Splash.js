import React from 'react';
import { View, Text, StyleSheet, Image, Animated} from 'react-native';
import Colors from '../../../constant/Colors'





class Splash extends React.Component {


    constructor(props) {
        super(props);
        this.loadingSpin = new Animated.Value(0);
    }

     spinAnimation =()=> {
        this.loadingSpin.setValue(0);
        Animated.sequence([
            Animated.timing(
                this.loadingSpin,
                {
                    toValue: 1,
                    duration: 900
                }
             ),
        //      Animated.timing(
        //          this.loadingSpin,
        //          {
        //              toValue: 0,
        //              duration: 900
        //          }
        //  )
        ]).start(()=> this.spinAnimation())
    }

    componentDidMount() {
        this.spinAnimation()
    }


    render(){
        const spin = this.loadingSpin.interpolate({
            inputRange: [0, 1],
            outputRange:['0deg', '360deg']
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('../../../assets/loading.png')} style={{transform: [{ rotate:spin}], height: 100, width: 100}}/>
            </View>
        )
    };
    }    
    
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

    
export default Splash;