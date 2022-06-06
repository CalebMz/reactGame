import React, { Component } from "react";

export default class HelpPage extends Component{
    render(){
        return(
        <div>
            <h1>How to play</h1>
            <hr></hr>
            <p>Welcome to Memory Memoir, the game that mixes the classic remember the card game with minesweeper. The goal of the game is pick the correct card from the ones 
                shown, however you can only pick and view one card at a time before hitting restart to pick another card. This is where your memory will be tested as you now 
                need to remember the card you were just shown which will give you a hint as to which card to pick next. There are three possible cards to find, a Safe card, a 
                Bomb card and lastly the Winner card. The Safe card will indicate the number of Bomb cards around it. The Bomb card will result in a loss if picked and the Winner 
                card will result in a win if chosen.
            </p>
        </div>)
    }
}