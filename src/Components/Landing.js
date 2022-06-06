import React, { Component } from "react";
import Help from "./Help";
import Start from "./Start";
import User from "./User";

export default class Landing extends Component{
    render(){
        return(<div>
            
            <h1>Memory Memoir</h1>
            <h3>Test your memory!</h3>
            <hr></hr>
            <br></br>
            <img id="mainImage" src="https://cdn-icons-png.flaticon.com/512/2560/2560528.png" alt="memorypng" />
            <br></br>
            <br></br>
            <Start/>
            <br></br>
            <Help/>
            <br></br>
            <User/>
        </div>)
    }
}