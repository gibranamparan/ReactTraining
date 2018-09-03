import React, {Component} from 'react';

class VideoListItem extends Component{
    render(){
        return(
            <div>
                <img src="https://i.ytimg.com/vi/7a-n8hELH24/hqdefault.jpg" alt="" className='col-md-3' />
                <p className = 'col-md-9'>YES PAPA MEME EXPOSED</p>
            </div>
        );
    }
}

export default VideoListItem;