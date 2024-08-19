import React, { useContext } from 'react'
import ModalContext from '../Context/ModalContext.jsx'
import {currencyFormat} from '../UI/NumberFormatting'
import CartContext from '../Context/Context'
import Modal from './Modal'
import Button from './Button'
import CartItem from '../components/CartItem.jsx'
function Cart() {
    const cartModalContext = useContext(ModalContext)
    const cartContext = useContext(CartContext)
    const total = cartContext.item.reduce((start, item) =>{
      return start + item.price * item.quantity;       
    },0)

    function handleCancelButton(){
      cartModalContext.hideCart();
    }

    function handleOpenCheckOut(){
      cartModalContext.showCheckout()
    }

  return (
    <Modal className='modal' open={cartModalContext.progress === 'cart'}>
        <ul>
          <h2>Food Cart</h2>
          {cartContext.item.map((data)=>(
              <CartItem id={data.id} key={data.id} name={data.name} price={data.price} quantity={data.quantity}/>
          ))}
        </ul>
        <p className='cart-total'> {currencyFormat.format(total)} </p>
        <div className='modal-actions'>          
          <Button className='text-button' onClick={handleCancelButton}>Cancel</Button>
          {cartContext.item.length > 0 && <Button onClick={handleOpenCheckOut}>Proceed</Button>}
        </div>
    </Modal>    
  )
}

export default Cart
