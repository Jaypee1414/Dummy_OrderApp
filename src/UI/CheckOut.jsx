import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import {postCartMeal} from '../https/Http.js'
import ModalContext from '../Context/ModalContext.jsx'
import CartContext from '../Context/Context.jsx'
import Button from './Button.jsx'
import CheckOutInput from './CheckOutInput.jsx'
import {currencyFormat} from './NumberFormatting.js'
function CheckOut() {
    const [error, setError] = useState()
    const [message, setMessage ] = useState()
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
      const customer = Object.fromEntries(formdata.entries());
      const item = itemContext.item
      
      async function postData(){
        try {
          const data = await postCartMeal(item, customer)
          setMessage('order success')
          event.target.reset()
        } catch (error) {
          setError({message:  "There is something wrong, Please try again later."})
        }  
      }
      postData();
    }
  return (
    <Modal open={cartContext.progress === 'checkout'}>
      <form onSubmit={handleCheckOutform}>
        <h2>Check-Out</h2>
        <p>Total Amount : {currencyFormat.format(totalQuantity)} </p>
        <p className='error'>{error? error.message : message}</p>
        <CheckOutInput type="text" name='name' id='full-name' />
        <CheckOutInput type="email" name='email' id='email'/>
        <CheckOutInput type="text" name='street' id='street'/>
        <div className='control-row'>
          <CheckOutInput type="number" name='postal-code' id='Postal-code'/>
          <CheckOutInput type="text" name='city' id='city'/>
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
