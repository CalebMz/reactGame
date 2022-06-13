import React, { Component } from "react";
import Restart from "./Restart";
import MyCards from "./MyCards";
//Here we have to arrays that hold cards. Two arrays where used as one array takes up one row. The MyCards 
//component is what displays the information in the arrays as a card element on the page.
//Below the cards is the restart button which when clicked reloads the page.

const cards1 = [{id: "c1", imgID:'i1', cardName: "Bomb", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}, 
{id: "c2", imgID:'i2',  cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c3", imgID:'i3',   cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c4", imgID:'i4',  cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c5", imgID:'i5',  cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c6", imgID:'i6',  cardName: "Winner", bombsNearby:"3 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c7", imgID:'i7',  cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c8", imgID:'i8',  cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}];

const cards2 = [{id: "c9", imgID:'i9', cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}, 
{id: "c10", imgID:'i10',  cardName: "Bomb", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c11", imgID:'i11',  cardName: "Safe", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c12", imgID:'i12',  cardName: "Safe", bombsNearby:"3 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c13", imgID:'i13',  cardName: "Bomb", bombsNearby:"2 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c14", imgID:'i14',  cardName: "Safe", bombsNearby:"3 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c15", imgID:'i15',  cardName: "Bomb", bombsNearby:"0 Bombs nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"},
{id: "c16", imgID:'i16',  cardName: "Safe", bombsNearby:"1 Bomb nearby", cardImage: "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg"}];

export default class Game extends Component{

    

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossorigin="anonymous"/>
                <MyCards cards={cards1}/>
                <MyCards cards={cards2}/>
                <Restart/>
            </div>
        )
    }
}