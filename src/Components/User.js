import React, { Component } from "react";
import Input from "./Input1";

//This component allows the user to log in and change the name displayed under the help button

export default class User extends Component{
    constructor(props){
        super(props);

        this.handleTxt1Change= this.handleTxt1Change.bind(this);
        this.handleTxt2Change = this.handleTxt2Change.bind(this);
        
        //In the constructor we initialise the state.
        this.state = {name: 'Guest'};
    }

    handleTxt1Change(text){
        this.setState({
          name : text,
        })
    }

    handleTxt2Change(text){
        this.setState({
          name : text,
        })
    }

    

    render() {
        return (
            <div>
                <h3 onTextChange={this.handleTxt1Change}>{this.state.name}</h3>
                
        
                <Input id="userForm" text={this.state.name} onTextChange={this.handleTxt2Change} />
                
            </div>
        )
    }
}