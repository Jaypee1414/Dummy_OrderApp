import React from 'react'
import Header from './Header'
import Food from './Food'
import {CartContextProvider} from '../Context/Context.jsx'
import { ModalCartProvider } from '../Context/modalContext.jsx'

function MyApp() {
  return (
    <CartContextProvider>
      <ModalCartProvider>
        <Header/>
        <Food/>
      </ModalCartProvider>
    </CartContextProvider>
  )
}

export default MyApp
