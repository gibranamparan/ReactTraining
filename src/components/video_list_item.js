import React, {Component} from 'react';

/*
Component to show heach video responded by youtube API
*/
class VideoListItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var url = this.props.video.snippet.thumbnails.medium.url;
        var video = this.props.video;
        return(
            /* The external defined event is triggered when the list item is clicked, seding as argument
            up to its parents its correspondant video */
            <li className='list-group-item' onClick = { () => this.props.onSelectVideo(video) }>
                <div className="video-list media">
                    {/* Video Thumbnail */}
                    <div className = "media-left">
                        <img className = "media-object" src={ url } alt="" />
                    </div>
                    <div className="media-body">
                        {/* Title and Link to Video */}
                        <a href={'https://youtu.be/' + video.id.videoId} target='_blank'>
                            <h5 className = 'media-heading'>
                                { video.snippet.title }
                            </h5>
                        </a>
                        {/*Video Description*/}
                        <p>{ video.snippet.description }</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;