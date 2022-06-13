import React, { Component } from "react";

export default class HelpPage extends Component{
    render(){
        return(
        <div>
            <h1>How to play</h1>
            <hr></hr>
            <p>Welcome to bomb sweeper! The goal of the game is to find the 
                winning card without hitting any bombs. Hitting a bomb will result in a lose while 
                revealing the winning card will result in a win. There are three kinds of cards you can 
                find, the first is a Safe card which will reveal how many bombs are around it to help 
                you decide which card to flip next. The next card is the Bomb card which will result in 
                a loss. The final card is the Winner card which will result in a win. Bombs
                nearby indicates there is a bomb card either adjacent, parallel or above 
                a card. The game can be restarted at anytime by clicking the restart button. Goodluck!
            </p>
        </div>)
    }
}