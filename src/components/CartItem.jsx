import React, { useContext } from 'react'
import {currencyFormat} from '../UI/NumberFormatting'
import CartContext from '../Context/Context'

function CartItem({name, price, quantity, id, meal}){
  const cartContext = useContext(CartContext)

  function handleIncrease(){
    cartContext.addItem(meal)
  }

  function handleDecrease(){
    cartContext.deleteItem(id)
  }

  return (
    <li className='cart-item' key={id}>
      <p>{name} - {quantity} *  {currencyFormat.format(price)}</p>
      <div className='cart-item-actions'>
        <button onClick={handleDecrease}> - </button>
        <p>{quantity}</p>
        <button onClick={handleIncrease}> + </button>
      </div>
    </li>
  )
}

export default CartItem
