import React from "react";
import { Link } from 'react-router-dom'
export default () => {
  return (
    <div className="get-started-container">
      <h1 className="home-header">How is the weather at your place today?</h1>
      <Link to="/weatherApp" className="btn-get-started">
        Get Started!
      </Link>
    </div>
  );
};
