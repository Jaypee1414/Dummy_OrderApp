import React, { useContext } from 'react'
import Modal from './Modal'
import ModalContext from '../Context/ModalContext'
import CartContext from '../Context/Context'
import Button from './Button'

function ShowOrder() {
    const orderModal = useContext(ModalContext)
    const allOrderModal = useContext(CartContext)

    function handleCancelButton(){
        orderModal.hideOrder()
    }

  return (
    <Modal open={orderModal.progress === 'showOrder'} >
    <ul>
        <h2>Food Order</h2>
        <p>Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming and hihgly pleasant to the taste.</p>
    </ul>
    <p className='cart-total'> total Amount </p>
    <div className='modal-actions'>          
        <Button className='text-button' onClick={handleCancelButton}>Cancel</Button>
    </div>
    </Modal>
  )
}

export default ShowOrder
