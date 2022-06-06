import React, { Component } from "react";
import Restart from "./Restart";
import MyCards from "./MyCards";
//Here we have to arrays that hold cards. Two arrays where used as one array takes up one row. The MyCards 
//component is what displays the information in the arrays as a card element on the page.
//Below the cards is the restart button which when clicked reloads the page.

const cards1 = [{id: "1", cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}, 
{id: "2",   cardName: "Bomb", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "3",   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "4",   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "5",   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "6",   cardName: "Winner", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "7",   cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "8",   cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}];

const cards2 = [{id: "9", cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}, 
{id: "10",   cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "11",   cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "12",   cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "13",   cardName: "Safe", bombsNearby:"1 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "14",   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "15",   cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "16",   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}];
export default class Game extends Component{

    

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossorigin="anonymous"/>
                <MyCards cards={cards1} onClick={this.handleClick}/>
                <MyCards cards={cards2}/>
                <Restart/>
            </div>
        )
    }
}