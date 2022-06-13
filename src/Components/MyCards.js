import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cardStyles.css';
import Card from 'react-bootstrap/Card';
//See more about Container, Row and Col components here: https://react-bootstrap.github.io/layout/grid/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default class MyCards extends Component{
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
        if (x === "c1"){
            document.getElementById("i1").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c2"){
            document.getElementById("i2").style.visibility = "visible";
        }else if (x === "c3"){
            document.getElementById("i3").style.visibility = "visible";
        }else if (x === "c4"){
            document.getElementById("i4").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c5"){
            document.getElementById("i5").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c6"){
            document.getElementById("i6").style.visibility = "visible";
            alert("congratulations, you win!")
        }else if (x === "c7"){
            document.getElementById("i7").style.visibility = "visible";
        }else if (x === "c8"){
            document.getElementById("i8").style.visibility = "visible";
        }else if (x === "c9"){
            document.getElementById("i9").style.visibility = "visible";
        }else if (x === "c10"){
            document.getElementById("i10").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c11"){
            document.getElementById("i11").style.visibility = "visible";
        }else if (x === "c12"){
            document.getElementById("i12").style.visibility = "visible";
        }else if (x === "c13"){
            document.getElementById("i13").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c14"){
            document.getElementById("i14").style.visibility = "visible";
        }else if (x === "c15"){
            document.getElementById("i15").style.visibility = "visible";
            alert("You lose!");
        }else if (x === "c16"){
            document.getElementById("i16").style.visibility = "visible";
        }
    }



    render(){
        const cardList = this.props.cards.map((card) =>
            <Col id="cardbackground">
                <Card border="light" style={{width:'6.8rem'}}>
                    <Card.Img variant="top" style={{width:'100px', height: '130px'}} src={card.cardImage} id={card.id} onClick={ this.handleClick }/>
                    <Card.Body className='GameCards' id={card.imgID}>
                        <Card.Title >
                            {card.cardName}
                        </Card.Title>
                        <Card.Text >
                            {card.bombsNearby}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        );
        return(
            <Container>
                <Row>
                    {cardList}
                </Row>
                
            </Container>
        )
    }
}