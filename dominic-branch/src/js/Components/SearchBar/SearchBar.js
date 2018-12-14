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
      <form id="search-form" onSubmit={this.onSubmit} autoComplete="off">
      
       <div class="floating-label">      
      <input class="floating-input" type="text"  placeholder="&nbsp;"
          type='text'
          onChange={this.onInputChange}
          value={this.state.city} placeholder=" "/>
      <span class="highlight"></span>
      <label>Enter a city...</label>
      </div>

      </form>
      </div>
     
    );
  }
}


// <div className="SearchBar-container">
// <form id="search-form" onSubmit={this.onSubmit} autoComplete="off">
// <Input
//     id="Search-Bar"
//     size="massive"
//     icon={<Icon  name='search'/>}
//     placeholder="Enter a city..."
//     type='text'
//     onChange={this.onInputChange}
//     value={this.state.city}
//   />
// </form>

// </div>