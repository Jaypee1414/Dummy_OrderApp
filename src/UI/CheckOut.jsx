import React, { useContext, useEffect } from 'react'
import Modal from './Modal'
import {postCartMeal} from '../https/Http.js'
import ModalContext from '../Context/ModalContext.jsx'
import CartContext from '../Context/Context.jsx'
import Button from './Button.jsx'
import CheckOutInput from './CheckOutInput.jsx'
import {currencyFormat} from './NumberFormatting.js'
function CheckOut() {
    const cartContext = useContext(ModalContext)
    const itemContext = useContext(CartContext)
    const totalQuantity = itemContext.item.reduce((total, item)=>{
      return total + item.quantity * item.price
    },0)
    function handleCancelCheckout(){
        cartContext.hideCheckout()
    }


    function handleCheckOutform(event){
      event.preventDefault();

      const formdata = new FormData(event.target)
      const data = Object.fromEntries(formdata.entries());
      console.log(data)
    
    }
  return (
    <Modal open={cartContext.progress === 'checkout'}>
      <form onSubmit={handleCheckOutform}>
        <h2>Check-Out</h2>
        <p>Total Amount : {currencyFormat.format(totalQuantity)} </p>
        <CheckOutInput type="text" name='Full-name' id='name'/>
        <CheckOutInput type="email" name='email' id='email'/>
        <CheckOutInput type="street" name='street' id='street'/>
        <div className='control-row'>
          <CheckOutInput type="Postal-code" name='postal-code' id='Postal-code'/>
          <CheckOutInput type="city" name='city' id='city'/>
        </div>
        <div className='modal-actions'>
          <Button type="button" textOnly className='text-button' onClick={handleCancelCheckout} >Cancel</Button>
          <Button>Checkout</Button>
        </div>
      </form>
    </Modal>
  )
}

export default CheckOut
