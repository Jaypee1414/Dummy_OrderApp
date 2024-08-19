import React from 'react'
import Header from './Header'
import Food from './Food'
import Cart from '../UI/Cart.jsx'
import {CartContextProvider} from '../Context/Context.jsx'
import { ModalCartProvider } from '../Context/ModalContext.jsx'
import CheckOut from '../UI/CheckOut.jsx'

function MyApp() {
  return (
    <CartContextProvider>
      <ModalCartProvider>
        <Header/>
        <Food/>
        <Cart/>
        <CheckOut/>
      </ModalCartProvider>
    </CartContextProvider>
  )
}

export default MyApp
