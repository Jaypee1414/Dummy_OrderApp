import React, { useContext } from 'react'
import ModalContext from '../Context/ModalContext.jsx'
import Modal from './Modal.jsx'
function Succes() {
    const cartContext = useContext(ModalContext)
    console.log(cartContext.progress)
  return (
    <Modal open={cartContext.progress === 'success'} >
        <h2>Order Success</h2>
        <p>your order is success keep your email line open for the next step</p>
    </Modal>
  )
}

export default Succes
