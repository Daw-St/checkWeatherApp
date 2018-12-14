import React, { Component, Fragment } from 'react';

import HomeGetStarted from '../HomeGetStarted/HomeGetStarted'
import VideoBackground from '../VideoBackground/VideoBackground';

class HomePage extends Component{
        render(){
            return(
                <Fragment>
                  <VideoBackground data='homeVideo'/>
                  <HomeGetStarted/>
                </Fragment>
            )
        }
}

export default HomePage