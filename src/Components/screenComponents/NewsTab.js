import React from 'react';
import { View, StyleSheet} from 'react-native'; 
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, } from 'native-base';
import Colors from '../../../constant/Colors'  
    
export default class NewsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
    }
    render() {
        const { data } = this.state;
        console.log(data)
        return (
            <ListItem thumbnail style={{margin: 0,}}>
                <Body>
                    <Text>{data.title}</Text>
                    <Text note numberOfLines={4}>{data.description}</Text>
                    <Text style={{color:Colors.primary,marginTop:10,}}>{data.source}</Text>
                </Body>
                <Right>
                    <Thumbnail style={{width: 80, height:90}} square source ={{uri : data.urlToImage }} />
                </Right>
            </ListItem>
        )
    }
};
    

    


























































{/* <TouchableOpacity style={Styles.rootContainer} key={key}>
    <View style={Styles.newsContainer}>

                                <View style={{ width: '95%', height: '45%', flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center' }}>

                                    <View style={{ width: '63%', height: '87%' }}>
                                        <Text style={{ textAlign: 'justify', fontSize: 15, fontWeight: 'bold', lineHeight: 17, color: 'black' }}> { newsItem.title }</Text>
                                    </View>

                                    <View style={{ width: '30%', height: '87%' }}>
                                        <Image
                                            source={{ uri: newsItem.urlToImage }}
                                            style={Styles.sideMenuProfileIcon}
                                        />
                                    </View>

                                </View>

                                <View style={{ width: '95%', height: '45%', padding: 5 }}>
                                    <Text style={{ textAlign: 'justify', fontSize: 16, color: 'white' }}>{ newsItem.content }</Text>
                                </View>


                            </View>
</TouchableOpacity> */}