import React from 'react';
import './Card.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function CardLoading(){
    return (
        <div className="cardSkeleton">
            <div className="cardImage"><Skeleton height={350}  width={250}/></div>
            <div className="infoContainer">
                <div className="single pokeName"><Skeleton width={200}/></div>
                <div className="single pokeRarity"><Skeleton width={150}/></div>
                <div className='flexContainer'>
                    <div className="double pokePrice"><Skeleton /></div>
                    <div className="double pokeLeft"><Skeleton /></div>
                </div>
            </div>
        </div>
      );
}

export default CardLoading;
