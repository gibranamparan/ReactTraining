import React, {Component} from 'react';

/*
Component to show heach video responded by youtube API
*/
class VideoDetails extends Component{
    constructor(props){
        super(props)
    }

    render(){
        //Show loading animation until we have the 1st video responded
        if(!this.props.video)
            return (<div>Loading...</div>)

        //Video received as paramenter
        var video = this.props.video;
        //URL for iframe
        var url = `https://www.youtube.com/embed/${ video.id.videoId }`;
        return(
            // Video details layout
            <div className="video-detail">
                {/* Video reproducer */}
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={ url } className = 'embed-responsive-item'></iframe>
                </div>
                {/* Title & description */}
                <div className="details">
                    <h2>{ video.snippet.title }</h2>
                    <div>{ video.snippet.description }</div>
                </div>
            </div>
        );
    }
}

export default VideoDetails;
