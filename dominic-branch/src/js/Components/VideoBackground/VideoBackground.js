import React, { Component } from "react";
import video1 from "../../../assets/videos/BubbleTurningIntoIce.mp4";


export default class VideoBackground extends Component {
  constructor(props){
    super(props)

  }
  changeVideo = (data) => {
    if(data === 'homeVideo')
    return 'BubbleTurningIntoIce.mp4'
  }

  
  render(){
  return (
    <video id="video-background" preload="auto" loop autoPlay muted playsInline>
      <source src={this.changeVideo(this.props.data)} type="video/mp4" />
    </video>
  );
  }
};
