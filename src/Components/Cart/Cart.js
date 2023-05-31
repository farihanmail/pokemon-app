import React from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'

function Cart(props) {

  console.log(props.updateCart)
  return (
    <div className='cartModal'>
      <div className='modal'>
          <div className='itemContainer'>
            {props.updateCart.map((ele)=>(
                  <CartItem
                    key={ele.id}
                    name={ele.name}
                    image={ele.images.small}
                    price={ele.cardmarket ? ele.cardmarket.prices.averageSellPrice:'0'}
                    count={ele.cartCount}
                    left={ele.set.total}
                  />
              ))
            }
          </div>
          
          <div className='cartSummary'>
            <div className='summaryContainer'>
              <div className='clearAll'>
                <a className='clearAll'>Clear all</a>
              </div>
              <div className='summaryInfo totNos'>
                <span>Total Cards</span>
                <span className='totVal'>7</span>
              </div>
              <div className='summaryInfo totPrice'>
                <span>Total Cards</span>
                <span className='totVal'>$19.97</span>
              </div>
              <button className='payNow'>Pay Now</button>
            </div>
          </div>
          <button className='closeBtn' onClick={props.closeCart}>x</button>
      </div>
    </div>
  )
}

export default Cart