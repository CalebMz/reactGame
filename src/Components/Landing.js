import React, { Component } from "react";

import User from "./User";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Bomb Sweeper</h1>
        <h3>Find the winning card, avoid the bombs!</h3>
        <br></br>
        <img
          id="mainImage"
          src="https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif"
          alt="memorypng"
        />
        <br></br>
        <User />
      </div>
    );
  }
}
