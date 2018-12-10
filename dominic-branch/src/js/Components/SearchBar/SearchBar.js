import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="SearchBar-container">
                <input id="SearchBar" placeholder="Enter a city"/>
            </div>
            
        )
    }
}