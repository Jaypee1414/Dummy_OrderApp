import React, { useContext } from 'react'
import ModalContext from '../Context/ModalContext.jsx'
import {currencyFormat} from '../UI/NumberFormatting'
import CartContext from '../Context/Context'
import Modal from './Modal'
import Button from './Button'
function Cart() {
    const cartModalContext = useContext(ModalContext)
    const cartContext = useContext(CartContext)
    const total = cartContext.item.reduce((start, item) =>{
      return start + item.price * item.quantity;       
    },0)

    function handleCancelButton(){
      cartModalContext.hideCart();
    }

  return (
    <Modal className='modal' open={cartModalContext.progress === 'cart'}>
        <ul>
          {cartContext.item.map((data)=>(
            <li className='cart-item' key={data.id}>
              <p>{data.name} - {data.quantity}</p>
            </li>
          ))}
        </ul>
        <p className='cart-total'> {currencyFormat.format(total)} </p>
        <div className='modal-actions'>
          <Button>Check-Out</Button>
          <Button className='text-button' onClick={handleCancelButton}>Cancel</Button>
        </div>
    </Modal>    
  )
}

export default Cart
