import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Help from "./Help";
import Start from "./Start";
import User from "./User";

export default class MyNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Container>
            <Nav.Link href="play">
              <Start />
            </Nav.Link>
            <Nav.Link href="help">
              <Help />
            </Nav.Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}
