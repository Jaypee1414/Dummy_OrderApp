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

  const quantity = item.reduce((numberofItems, item) =>{
    return numberofItems + item.quantity
  }, 0)

  function handleCart(){
    cartModalContext.showCart()
    console.log("header button click")
  }
  return (
      <div id='main-header'>
      <div id='title'>
          <img src={logo} alt="Header food React app logo" />
          <h1>React Food Oredering App</h1>
      </div>
      <nav>
          <Button textOnly onClick={handleCart}>Cart {quantity}</Button>
      </nav>
      </div>
  )
}

export default Header
