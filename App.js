import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoadingScreen from './src/Screens/LoadingScreen';
import DashboardDrawerNavigation from './src/AppNavigations/DashboardDrawerNavigation';



//This Root navigator houses the loading screen and the dashboard drawer navigation/screen

const RootSwitchNavigator = createSwitchNavigator({
  Loading: { screen: LoadingScreen },
  Dashboard: { screen: DashboardDrawerNavigation }
})  


export default createAppContainer(RootSwitchNavigator)

