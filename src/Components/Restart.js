import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Restart extends Component {
  render() {
    return (
      <div>
        <Button id="restartButton" href="play">
          Restart
        </Button>
      </div>
    );
  }
}
