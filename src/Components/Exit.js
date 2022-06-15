import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Exit extends Component {
  render() {
    return (
      <div>
        <Button id="exitButton" href="/">
          Exit
        </Button>
      </div>
    );
  }
}
