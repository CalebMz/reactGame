import React, { Component } from "react";
import Exit from "./Exit";

export default class HelpPage extends Component {
  render() {
    return (
      <div>
        <h1>How to play</h1>
        <hr></hr>
        <p>
          Welcome to bomb sweeper! The goal of the game is to find the winning
          card without clicking on any bomb cards. Hitting a bomb card will result in a loss
          while revealing the winning card will result in a win. There are three
          kinds of cards you can find, the first is a Safe card which will
          reveal how many bombs are around it to help you decide which card to
          flip next. The next card is the Bomb card which will result in a loss.
          The final card is the Winner card which will result in a win. Bombs
          nearby indicates how many bombs are around the card you've chosed. For example, if a card says 
          "2 Bombs nearby" this means that two of the cards around it are bomb cards and this can be 
          either diagonal, next to or above/below the card.
          The game can be restarted at anytime by clicking the restart button. Goodluck!
        </p>

        <Exit />
      </div>
    );
  }
}
