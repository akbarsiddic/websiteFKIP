import React from 'react'
import YouTube from 'react-youtube'

export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "280",
      width: "520",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
        <h3>FKIP Kampus Merdeka</h3>
        <YouTube videoId="CE64g_hdu_8" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}