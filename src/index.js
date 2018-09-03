import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyAWOeFRwVao_KPTOyNKkOJSJirPJnFi2ag';
import YTSearch from 'youtube-api-search'

// Create a component
class App extends Component {
    constructor(params){
        super(params);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'pewdiepie'}, (videos) => {
            this.setState({ videos });
            console.log(videos);
        });
    }
    
    render(){
        return (
            <div>
                <div>
                    <SearchBar/>
                </div>
                <div>
                    <VideoList videos = { this.state.videos }/>
                </div>
            </div>
        );
    }
}

// Put it in the page
ReactDOM.render(<App/>, document.querySelector(".container"));