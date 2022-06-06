import React, { Component } from "react";
import { Button } from "reactstrap";

//This button takes the user to the game page
export default class Start extends Component{
    render(){
        return(<div><Button id="playButton" href="play">Play</Button></div>)
    }
}