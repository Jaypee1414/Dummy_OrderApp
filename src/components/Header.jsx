import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../Context/Context'
import Modal from '../UI/Modal'
import ModalContext from '../Context/ModalContext'

function Header() {
  const cartModalContext = useContext(ModalContext)
  const cartContext = useContext(CartContext);
  const item = cartContext.item
  const order = cartContext.order

  const quantity = item.reduce((numberofItems, item) =>{
    return numberofItems + item.quantity
  }, 0)

  const orderQuantity = order.reduce((NumberOfItem,item) =>{
    return NumberOfItem + item.quantity
  },0)

  function handleCart(){
    cartModalContext.showCart()
  }

  function handleOrder(){
    cartModalContext.showOrder()
  }
  return (
      <div id='main-header'>
      <div id='title'>
          <img src={logo} alt="Header food React app logo" />
          <h1>React Food Oredering App</h1>
      </div>
      <Button textOnly onClick={handleCart}>Cart {quantity}</Button>
      <Button textOnly onClick={handleOrder}>Order {orderQuantity}</Button>
      </div>
  )
}

export default Header
