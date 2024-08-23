import React from 'react'
import Header from './Header'
import Food from './Food'
import Cart from '../UI/Cart.jsx'
import {CartContextProvider} from '../Context/Context.jsx'
import { ModalCartProvider } from '../Context/ModalContext.jsx'
import CheckOut from '../UI/CheckOut.jsx'
import ShowOrder from '../UI/ShowOrder.jsx'

function MyApp() {
  return (
    <CartContextProvider>
      <ModalCartProvider>
        <Header/>
        <Food/>
        <ShowOrder/>
        <Cart/>
        <CheckOut/>
      </ModalCartProvider>
    </CartContextProvider>
  )
}

export default MyApp
