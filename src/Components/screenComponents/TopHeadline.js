import React from 'react';
import { Text, StyleSheet, View} from 'react-native'; 
import { Icon, Button, Container, Header, Left, Body, Title, Tab, Tabs, ScrollableTab,Content } from 'native-base'; 
import Colors from '../../../constant/Colors'
import { BusinessNewsTabComponent, EntertainmentNewsTabComponent, GeneralNewsTabComponent, HealthNewsTabComponent, ScienceNewsTabComponent, SportsNewsTabComponent, TechnologyNewsTabComponent,  } from '../../Components/tabNewsComponent';
    


class TopHeadline extends React.Component {
    constructor() {
        super();
        this.TabNewsComponents = [
            {
                component: <GeneralNewsTabComponent/>,
                heading: 'General',    
            }, 
            {
                component: <EntertainmentNewsTabComponent/>,
                heading: 'Entertainment',
            },
            {
                component: <BusinessNewsTabComponent />,
                heading: 'Business',
            },
            {
                component: <SportsNewsTabComponent />,
                heading: 'Sports',
            },
            {
                component: <HealthNewsTabComponent />,
                heading: 'Health',
            },
            {
                component: <ScienceNewsTabComponent />,
                heading: 'Science',
            },
            {
                component: <TechnologyNewsTabComponent />,
                heading: 'Technology',
            },    

        ];
    }
    
    render(){
        return (
            <Container style={{backgroundColor: Colors.primaryFade}}>
                <Header style={{ backgroundColor: Colors.primary, borderBottomColor: Colors.primary, }} iosBarStyle="light-content" androidStatusBarColor='rgba(50,10,40,.7)'hasTabs transparent>
                    <Left>
                        <Button transparent>
                            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 30, color: Colors.accent, }}onPress={() => this.props.navigation.openDrawer()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 25, color: Colors.accent, fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic', marginLeft: 30, borderBottomColor: Colors.primary }}>Top Headline</Title>
                    </Body>
                </Header>
                    <Tabs tabBarPosition='top' tabBarUnderlineStyle={{ backgroundColor: Colors.accent, borderBottomColor: Colors.primary, flex: 1 }} renderTabBar={() => <ScrollableTab />}>
                        {
                            this.TabNewsComponents.map((TabNewsComponent, key) =>
                                <Tab tabStyle={{ backgroundColor: Colors.accent, borderTopColor: Colors.primary, }} textStyle={Styles.textStyle} activeTextStyle={{ color: Colors.accent, fontFamily: 'cursive', fontSize: 20, fontWeight: 'bold' }} activeTabStyle={{ backgroundColor: Colors.primary }} heading={TabNewsComponent.heading} key={key}>
                                    {TabNewsComponent.component}
                                </Tab>
                            )
                        }
                    </Tabs>
            </Container> 
        )
    }
    
};
    
const Styles = StyleSheet.create({
    textStyle: {
        color: Colors.primary, 
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily:'cursive',
    },
});

    
export default TopHeadline;