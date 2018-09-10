import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'

const API_KEY = 'AIzaSyAWOeFRwVao_KPTOyNKkOJSJirPJnFi2ag';
import YTSearch from 'youtube-api-search'

// Create a component
class App extends Component {
    constructor(params){
        super(params);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'pewdiepie'}, (videos) => {
            this.setState({ videos });
            this.setState({selectedVideo : videos[0]})
            console.log(videos);
        });
    }
    
    render(){
        return (
            <div>
                <div>
                    <SearchBar/>
                </div>
                <div className = 'row'>
                    <VideoDetails video = { this.state.selectedVideo }/>
                </div>
                <div>
                    {/*Defines what to do when a inner video is selected (onSelectVideo event), the event receives a callaback,
                    this is defined here because the interaction of the selection goes to a variable in this main page*/}
                    <VideoList videos = { this.state.videos } onSelectVideo = { this.selectVideo  }/>
                </div>
            </div>
        );
    }

    selectVideo = (selectedVideo) => {
        /*Every component in this main page that uses selectedVideo will re-render if it updates*/
        this.setState({ selectedVideo: selectedVideo })
    }
}

// Put it in the page
ReactDOM.render(<App/>, document.querySelector(".container"));