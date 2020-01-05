import NetInfo from "@react-native-community/netinfo";



export async function getNetworkconnectionStatus(){
    
    try {
        let connection = await NetInfo.fetch();
        let connectionStatus = connection.isInternetReachable;
        return connectionStatus
    }
    catch (error) {
        console.log(error)
    }
}