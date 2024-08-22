import React, { useContext, useState } from 'react'
import Modal from './Modal'
import useFetch from '../hooks/useFetch'
import ModalContext from '../Context/ModalContext.jsx'
import CartContext from '../Context/Context.jsx'
import Button from './Button.jsx'
import CheckOutInput from './CheckOutInput.jsx'
import {currencyFormat} from './NumberFormatting.js'
import Message from './Message.jsx'

const config = {
  method: 'POST',
  headers:{ 
    'Content-type' : 'application/json'
  }
}
function CheckOut() {
    const {error, isloading, data, sendRequest,clearData} = useFetch('http://localhost:3000/orders', config)
    const cartContext = useContext(ModalContext)
    const itemContext = useContext(CartContext)
    let actions = (<><Button type="button" textOnly className='text-button' onClick={handleCancelCheckout} >Cancel</Button>
    <Button>Checkout</Button></>)
    const totalQuantity = itemContext.item.reduce((total, item)=>{
      return total + item.quantity * item.price
    },0)

    
    function handleCheckOutform(event){
      event.preventDefault();
      const formdata = new FormData(event.target)
      const customerOrdered = Object.fromEntries(formdata.entries());
      const items = 
      sendRequest(JSON.stringify({
        order : {
          items : itemContext.item,
          customer : customerOrdered
        }
      }))
    }

    if(isloading){
      actions = <p>Checking out please wait .... </p>
    }

    if(error){
      actions = <p className='error'>There is something wrong when checkout </p> 
    }
              
    function handleCancelCheckout(){
      cartContext.hideCheckout()
   }

   function handleOkay() {
      cartContext.hideCheckout()
      itemContext.reset()
      clearData()
   }


  if(data && !error){
    console.log(data)
    return(
      <Modal open={cartContext.progress === 'checkout'} onClose={handleOkay}>
        <Message title={"Successful Place order"} message={"Thankyou for order in reactfood please keep your email open for update"}/>
        <div className='modal-actions'>
          <Button onClick={handleOkay}>Okay</Button>
        </div>
      </Modal>
    )
  }
  return (
    <Modal open={cartContext.progress === 'checkout'} onClose={handleCancelCheckout}>
      <form onSubmit={handleCheckOutform}>
        <h2>Check-Out</h2>
        <p>Total Amount : {currencyFormat.format(totalQuantity)} </p>
        <p className='error'>{error && error.message}</p>
        <CheckOutInput type="text" name='name' id='full-name' />
        <CheckOutInput type="email" name='email' id='email'/>
        <CheckOutInput type="text" name='street' id='street'/>
        <div className='control-row'>
          <CheckOutInput type="number" name='postal-code' id='Postal-code'/>
          <CheckOutInput type="text" name='city' id='city'/>
        </div>
        <div className='modal-actions'>
          {actions}
        </div>
      </form>
    </Modal>
  )
}

export default CheckOut
