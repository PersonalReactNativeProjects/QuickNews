import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl, Button} from 'react-native'; 
import NewsTab from '../screenComponents/NewsTab'
import { List, Text} from 'native-base'
import NewsHeaderSearch from '../utilityComponents/NewsHeaderSearch'
import NewsSeparator from '../utilityComponents/NewsSeparator'
import FooterLoading from '../utilityComponents/FooterLoading'
//import { getNetworkconnectionStatus } from '../../../services/CheckNetworkConnection'
import Modal from 'react-native-modal'
import Colors from '../../../constant/Colors';
import NetInfo from "@react-native-community/netinfo";






export default class GeneralNewsTabComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
         isLoading: false,
         newsItems: [],
         isNetworkConnection: false,
         page: 1,
         refreshing: false,
         showNetworkModal: false
         
        }
    }
    componentDidMount(){
        this.getGeneralNewsArticlesHandler();
        this.connectionStatusHandler();
        
    }

    async getGeneralNewsArticlesHandler() {
        try {
            const { page } = this.state;
            this.setState({ isLoading: true });
            let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=general&pageSize=20&page=${page}&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4`)


            let result = await articles.json()
            articles = null;
            let data = await result.articles;
            let dataArray = []
            for (var i = 0; i < data.length; i++) {
                dataArray.push({
                    source: data[i].source.name,
                    author: data[i].author,
                    title: data[i].title,
                    description: data[i].description,
                    url: data[i].url,
                    urlToImage: data[i].urlToImage,
                    publishedAt: data[i].publishedAt,
                    content: data[i].content,
                    key: Math.random().toString(36).substring(7)

                })
            }
            //console.log(dataArray)
            this.setState({
                newsItems: page === 1? dataArray: [...this.state.newsItems, ...dataArray],
                isLoading: false,
                refreshing: false,
                page: 1,
                isNetworkConnection: true,
            })
        }
        catch(error){
            console.log(error);
        }
        
    }

    async getNetworkconnectionStatus() {

        try {
            let connection = await NetInfo.fetch();
            let connectionStatus = connection.isInternetReachable;
            return connectionStatus
        }
        catch (error) {
            console.log(error)
        }
    }


    getNetworkHandler = () => {
        this.getNetworkconnectionStatus()
            .then(connectionStatus => {
                //console.log(connectionStatus)
                this.setState({
                    isNetworkConnection: connectionStatus
                })
            })
    }
    
    
    
    refreshNewsArticlesHandler = () => {
        this.setState({
            page: 1,
            refreshing: true,
        },() => {
            this.getGeneralNewsArticlesHandler(); 
        })
    }

    loadMoreNewsArticlesHandler = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
           this.getGeneralNewsArticlesHandler() 
       }) 
    }
    renderSeparatorHandler = () => {
        return <NewsSeparator />
    }
    connectionStatusHandler = () => {
        this.getNetworkHandler()
        if (this.state.isNetworkConnection === false) {
            this.setState({
                showNetworkModal: true
            })
            setTimeout(() => {
                this.setState({
                 showNetworkModal: false
             })   
            },2000)
        }
    }

    
    render(){
        const { newsItems, isNetworkConnection } = this.state;

        return (
            <View>
                <NewsHeaderSearch />
                <List>
                    <FlatList
                        data={newsItems}
                        renderItem={({ item }) => (
                            <NewsTab data={item} />
                        )}
                        ItemSeparatorComponent={this.renderSeparatorHandler}
                        //ListHeaderComponent={<NewsHeaderSearch />}
                        ListFooterComponent={<FooterLoading newsItems={newsItems} isNetworkConnection={isNetworkConnection}/>}
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshNewsArticlesHandler}
                        onEndReached={this.loadMoreNewsArticlesHandler}
                        onEndReachedThreshold={100}
                        
                    />
                </List>
                <Modal
                    isVisible={this.state.showNetworkModal}
                    //onSwipeComplete={this.close}
                    //swipeDirection={['up', 'left', 'right', 'down']}
                    style={Styles.view}
                    hasBackdrop={false}
                    >
                    <View style={{justifyContent: 'center', alignItems:'center', height: 40, backgroundColor: Colors.noNetworkColor, opacity:0.9}}>
                        <Text style={{color: 'white', fontWeight:'bold'}}>Check your network connection</Text>
                    </View>
                </Modal>
            </View>
            ) 
        
        }
    }


    
const Styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },    
})




