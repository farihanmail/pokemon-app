import React from 'react'

function CartItem(props) {
  return (
    <div className='itemChosen'>
        <div className='itemImage'>
        <img className='cartImage' src={props.image}></img>
        </div>
        <div className='itemInfo'>
        <h2 className='pokeName'>{props.name}</h2>
        <p className='pokePrice'>${props.price} per card</p>
        <p className='pokeStock'><span className='stockVal'>{props.left}</span> cards left</p>
        </div>
        <div className='unitTotal'>
        <div>{props.count}</div>
        <div className='buttonContainer'>
            <button>+</button>
            <button>-</button>
        </div>
        </div>
    </div>
  )
}

export default CartItem