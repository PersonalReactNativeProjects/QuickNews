import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import Colors from '../../../constant/Colors'
import { List } from 'native-base'
import Modal from 'react-native-modal'
import NewsSeparator from '../utilityComponents/NewsSeparator'
import FooterLoading from '../utilityComponents/FooterLoading'


export default class NewsHeaderSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            newsItems: [],
            isNetworkConnection: false,
            page: 1,
            refreshing: false,
            showNetworkModal: false,
            searchTerm: '',

        }
    }
    async getGeneralNewsArticlesHandler() {
        try {
            const { page, searchTerm } = this.state;
            this.setState({ isLoading: true });
            let articles = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchTerm}&pageSize=10&page=${page}&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4`)

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
                newsItems: page === 1 ? dataArray : [...this.state.newsItems, ...dataArray],
                isLoading: false,
                refreshing: false,
                page: 1,
                isNetworkConnection: true,
            })
        }
        catch (error) {
            console.log(error);
        }

    }
    getNetworkHandler = () => {
        getNetworkconnectionStatus()
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
        }, () => {
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
    

    render() {
        const { newsItems, isNetworkConnection } = this.state;

        return (
            <View>
                

                {/* Search bar */}
                <View style={{ height: 60, alignItems: 'center', justifyContent: 'space-around', padding: 4, flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput placeholder="Search news..." placeholderTextColor={Colors.primary} style={{ paddingLeft: 30, fontSize: 20, color: Colors.primary, width: 380, height: 50, borderRadius: 5, shadowColor: Colors.primary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 3, }} />
                    </View>
                </View>


                {/* Search Result Modal Component */}
                <Modal
                    isVisible={this.state.showNetworkModal}
                    //onSwipeComplete={this.close}
                    //swipeDirection={['up', 'left', 'right', 'down']}
                    //style={Styles.ModalView}
                    hasBackdrop={false}
                >
                    
                    <List>
                        <FlatList
                            data={newsItems}
                            renderItem={({ item }) => (
                                <NewsTab data={item} />
                            )}
                            ItemSeparatorComponent={this.renderSeparatorHandler}
                            ListFooterComponent={<FooterLoading newsItems={newsItems} isNetworkConnection={isNetworkConnection} />}
                            // refreshing={this.state.refreshing}
                            // onRefresh={this.refreshNewsArticlesHandler}
                            onEndReached={this.loadMoreNewsArticlesHandler}
                            onEndReachedThreshold={100}

                        />
                    </List>
                    
                </Modal>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});

