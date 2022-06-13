import React, { Component } from "react";
import Help from "./Help";
import Start from "./Start";
import User from "./User";

export default class Landing extends Component{
    render(){
        return(<div>
            
            <h1>Bomb Sweeper</h1>
            <h3>Find the winning card!</h3>
            <hr></hr>
            <br></br>
            <img id="mainImage" src="https://www.seekpng.com/png/detail/175-1752613_explosion-clipart-cartoon-bomb-png.png" alt="memorypng" />
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