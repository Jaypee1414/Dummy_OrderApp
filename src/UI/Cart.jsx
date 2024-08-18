import React, { useContext } from 'react'
import ModalContext from '../Context/modalContext'
import Modal from './Modal'
function Cart() {
    const cartModalContext = useContext(ModalContext)

  return (
    <Modal>
        <ul>
        </ul>
    </Modal>    
  )
}

export default Cart
