import React, { Component } from "react";
import { Input, Icon, Button} from "semantic-ui-react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        city: ''
    }
  }

  onInputChange = e =>{
    this.setState({city: e.target.value})

  }
  onSubmit = e => {
    
      e.preventDefault();
    this.props.setCity(this.state.city);
      this.setState({city: ''})
      
  }

  render() {
    return (
      <div className="SearchBar-container">
      <form id="search-form" className="search-show" onSubmit={this.onSubmit} autoComplete="off">
      
       <div className="floating-label">      
      <input className="floating-input" type="text"  placeholder="&nbsp;"
          type='text'
          onChange={this.onInputChange}
          value={this.state.city} placeholder=" "/>
      <span className="highlight"></span>
      <label className="label-show" id="search-label">Enter a city...</label>
      </div>

      </form>
      </div>
     
    );
  }
}


