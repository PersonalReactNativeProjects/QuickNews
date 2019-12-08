import React from 'react';
import Livescores from '../Components/screenComponents/Livescores';


class LivescoresScreen extends React.Component {
    
    render() {
        return (
            <Livescores navigation={this.props.navigation}/>
        )
    }

};



export default LivescoresScreen;