import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import TopHeadlineScreen from '../Screens/TopHeadlineScreen'
import LivescoresScreen from '../Screens/LivescoresScreen';
import CustomDrawerContent from '../Components/screenComponents/CustomDrawerContent'



const DashboardDrawerNavigation = createDrawerNavigator({
    Headline: { screen: TopHeadlineScreen,
        navigationOptions: {
            drawerLabel: 'Top Headline',
        },},
    Livescores: { screen: LivescoresScreen,
        navigationOptions: {
            drawerLabel: 'LiveScores',
        }, }
},
{
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(239,67,37,.3)',
    drawerType: 'front',
    overlayColor: 'rgba(0,0,0,.3)',
    contentOptions:{
        activeTintColor: '#fff',
        activeBackgroundColor: 'rgba(55,55,55,.5)'
    },
    statusBarAnimation: 'slide',
    drawerWidth: '80%',
    edgeWidth: 10,
    contentComponent: CustomDrawerContent,
    initialRouteName: 'Headline',
    
})



export default createAppContainer(DashboardDrawerNavigation)
