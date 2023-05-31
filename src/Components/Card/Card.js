import React from 'react';
import './Card.css'

function Card(props){

    const selectCard =(ele)=>{
        props.selected(ele.target.getAttribute('data-id'))
    }

    return (
        <div className="card" data-types={props.types}>
            <div className="cardImage"><img src={props.image} alt="pokemon"/></div>
            <div className="infoContainer">
                <div className="single pokeName">{props.name}</div>
                <div className="single pokeRarity">{props.rarity? props.rarity : 'N/A'}</div>
                <div className='flexContainer'>
                    <div className="double pokePrice">${props.price}</div>
                    <div className="double pokeLeft">{props.left} left</div>
                </div>
            </div>
            <button className="selectCard" data-id={props.id} onClick={selectCard}>{props.id} Select card</button>
        </div>
      );
}

export default Card;
