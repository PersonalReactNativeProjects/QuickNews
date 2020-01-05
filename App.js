import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from './src/Screens/SplashScreen';
import DashboardDrawerNavigation from './src/AppNavigations/DashboardDrawerNavigation';



//This Root navigator houses the loading screen and the dashboard drawer navigation/screen

const RootSwitchNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  Dashboard: { screen: DashboardDrawerNavigation }
})  


export default createAppContainer(RootSwitchNavigator)

