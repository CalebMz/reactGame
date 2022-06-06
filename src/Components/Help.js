import { Button } from "reactstrap";
import React, { Component } from "react";

export default class Help extends Component{
    render(){
        return(<div>
            <Button id="helpButton" href="help">Help</Button>
            </div>)
    }
}