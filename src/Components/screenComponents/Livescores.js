import React from 'react';
import { Text, StyleSheet} from 'react-native'; 
import { Icon, Button, Container, Header, Content, Left, Body, Title, Item, Input } from 'native-base'
import Colors from '../../../constant/Colors'

    
class Livescore extends React.Component {
    render(){
        return (
            <Container >
                <Header style={{ backgroundColor: Colors.primary }}
                    iosBarStyle="light-content"
                    androidStatusBarColor='rgba(50,10,40,.7)'
                    hasTabs transparent>
                    <Left>
                        <Button transparent>
                            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 30, color: Colors.accent }} onPress={() => this.props.navigation.openDrawer()}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: Colors.accent, fontFamily: 'cursive', fontWeight: 'bold', fontSize: 25, fontStyle: 'italic', }}>Livescores</Title>
                    </Body>
                </Header>
                <Item style={{ paddingHorizontal: 10, }}>
                    <Icon name="search" style={{ fontSize: 25, color: Colors.primary }} />
                    <Input placeholder="Search Football News" />
                    <Icon name="football" style={{ fontSize: 25, color: Colors.primary }} />
                </Item>
                <Content contentContainerStyle={styles.container}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        )
    }
    
};
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
    
export default Livescore;