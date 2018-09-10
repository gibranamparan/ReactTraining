import React, {Component} from 'react';
import VideoListItem from './video_list_item';

/*
List of videos to show the result of the API response from youtube
*/
class VideoList extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props.videos.length == 0){
            return <div>Loading...</div>
        }
        
        //Render a video list
        var videoItems = this.props.videos.map((video) => {
            {/* The external defined event onSelecteVideo is assigned to each item in the list, which is passed as callaback too
            into VideoListItem component */}
            return <VideoListItem key={ video.etag } video = { video } onSelectVideo = { this.props.onSelectVideo }/>
        })
        
        return (
            <ul>
                { videoItems }
            </ul>
        );
    }
}

export default VideoList;