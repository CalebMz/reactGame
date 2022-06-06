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

    //when clicked on the card is meant to display cardName and bombsNearby
    handleClick() {
        document.getElementById("c1").style.visibility = "visible";
        
    }



    render(){
        const cardList = this.props.cards.map((card) =>
            <Col id="cardbackground">
                <Card border="light" className="myCards" style={{width:'6.8rem'}}>
                    <Card.Img variant="top" style={{width:'100px', height: '130px'}} src={card.cardImage} onClick={this.handleClick}/>
                    <Card.Body id="c1">
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