import React, {Component} from 'react';

class VideoList extends Component{
    constructor(props){
        super(props);
        
        this.state = { videos: props.videos };
    }
    
    render(){
        console.log(this.props.videos)
        return(
            <ul>
            {
                this.props.videos.forEach(video => {
                    <li>{ video.snippet.title }</li>
                })
            }
            </ul>
        )
    }
}

export default VideoList;