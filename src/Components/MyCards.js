import React, { Component } from "react";

import "../cardStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class MyCards extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //The following if statements deal with the various scenarios depending on which card the player picks
  //Displaying Win or Lose is determined here.
  //using event.target.id we get the id of the element and match it to the id of the Card.Body element
  //which we then make visible again. Since we making only the element with that ID visible and ID's
  //are unique this allows the other elements that were not clicked on to keep their Card.Body hidden.

  handleClick(event) {
    let x = event.target.id;
    if (x === "c1") {
      document.getElementById("c1").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i1").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000); //Will display an alert telling the user whether they won or lost
      setTimeout(function () {
        document.location.reload();
      }, 3000); //This will restart the game after a lose or win
    } else if (x === "c2") {
      document.getElementById("c2").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i2").style.visibility = "visible";
    } else if (x === "c3") {
      document.getElementById("c3").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i3").style.visibility = "visible";
    } else if (x === "c4") {
      document.getElementById("c4").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i4").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c5") {
      document.getElementById("c5").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i5").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c6") {
      document.getElementById("c6").src =
        "https://c.tenor.com/9bC8wn-2rSwAAAAM/leonardo-dicaprio.gif";
      document.getElementById("i6").style.visibility = "visible";
      setTimeout(function () {
        alert("You Win!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c7") {
      document.getElementById("c7").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i7").style.visibility = "visible";
    } else if (x === "c8") {
      document.getElementById("c8").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i8").style.visibility = "visible";
    } else if (x === "c9") {
      document.getElementById("c9").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i9").style.visibility = "visible";
    } else if (x === "c10") {
      document.getElementById("c10").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i10").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c11") {
      document.getElementById("c11").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i11").style.visibility = "visible";
    } else if (x === "c12") {
      document.getElementById("c12").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i12").style.visibility = "visible";
    } else if (x === "c13") {
      document.getElementById("c13").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i13").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c14") {
      document.getElementById("c14").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i14").style.visibility = "visible";
    } else if (x === "c15") {
      document.getElementById("c15").src =
        "https://c.tenor.com/5nZkA47SzacAAAAi/bomb-joypixels.gif";
      document.getElementById("i15").style.visibility = "visible";
      setTimeout(function () {
        alert("You lose!");
      }, 1000);
      setTimeout(function () {
        document.location.reload();
      }, 3000);
    } else if (x === "c16") {
      document.getElementById("c16").src =
        "https://www.cppng.com/file/thumb/2020-06/56271-9-keep-going-free-hd-image-thumb.png";
      document.getElementById("i16").style.visibility = "visible";
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  render() {
    const cardList = this.props.cards.map((card) => (
      <Col id="cardbackground">
        <Card
          border="light"
          style={{
            width: "6.8rem",
          }}
        >
          <Card.Img
            variant="top"
            style={{
              width: "100px",
              height: "130px",
            }}
            src={card.cardImage}
            id={card.id}
            onClick={this.handleClick}
          />
          <Card.Body className="GameCards" id={card.imgID}>
            <Card.Title> {card.cardName} </Card.Title>
            <Card.Text> {card.bombsNearby} </Card.Text>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </Col>
    ));
    return (
      <Container>
        <Row> {cardList} </Row>{" "}
      </Container>
    );
  }
}
