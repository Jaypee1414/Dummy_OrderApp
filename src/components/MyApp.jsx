import React from 'react'
import Header from './Header'
import Food from './Food'
import Cart from '../UI/Cart.jsx'
import {CartContextProvider} from '../Context/Context.jsx'
import { ModalCartProvider } from '../Context/ModalContext.jsx'

function MyApp() {
  return (
    <CartContextProvider>
      <ModalCartProvider>
        <Header/>
        <Food/>
        <Cart/>
      </ModalCartProvider>
    </CartContextProvider>
  )
}

export default MyApp
