import React from "react";
import { Link } from 'react-router-dom'
export default () => {
  return (
    <div className="get-started-container">
    <h1 className="main-title"><span className="thin-header">Global</span> Weather</h1>
      <h1 className="desc-header">Check the weather at your place!</h1>
      <Link to="/weatherApp" className="btn-get-started">
        Get Started!
      </Link>
    </div>
  );
};
