import React from 'react';
import './Header.css'
import logo from '../../LogoPokemon.svg';

function Header(){
    return (
        <div className="header">
            <div className="menuBar">
                <div className="bar"></div>
                <div className="circle"></div>
            </div>
            <h3>TCG Marketplace</h3>
            <div className="logo"><img src={logo}  alt="pokemon logo"/></div>
        </div>
      );
}

export default Header;
