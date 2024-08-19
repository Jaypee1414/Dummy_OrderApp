import React from 'react'
import {currencyFormat} from '../UI/NumberFormatting'

function CartItem({name, price, quantity, id}){
  return (
    <li className='cart-item' key={id}>
      <p>{name} - {quantity} *  {currencyFormat.format(price)}</p>
    </li>
  )
}

export default CartItem
