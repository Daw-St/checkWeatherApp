import React from "react";
import { Link } from 'react-router-dom'
export default function homeGetStarted(){
  return (
    <div className="get-started-container">
    <h1 className="main-title anim-home-el-1"><span className="thin-header">Global</span> Weather</h1>
      <h1 className="desc-header anim-home-el-2">Check the weather at your place!</h1>
      <Link to="/weatherApp" className="btn-get-started anim-home-el-3">
        Get Started!
      </Link>
    </div>
  );
};
