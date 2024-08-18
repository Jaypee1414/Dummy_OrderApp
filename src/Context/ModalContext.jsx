import { createContext, useState } from "react"

const  ModalContext = createContext({
    progress:  '', 
    showCart: () => {}, 
    hideCart: () => {}, 
    showCheckout: () => {}, 
    hideCheckout: () => {}, 
})


export function ModalCartProvider({children}) {

    const [modalProgress, setModalProgress] = useState('')
    
    const modalCartValue = {
        progress: modalProgress,
        showCart,
        hideCart,
        showCheckout, 
        hideCheckout
    }

    function showCart(){
        setModalProgress('cart')
    }

    function hideCart(){
        setModalProgress('')
    }

    function showCheckout(){
        setModalProgress('checkout')
    }

    function hideCheckout() {
        setModalProgress('')
    }

    return (<ModalContext.Provider value={modalCartValue}>{children}</ModalContext.Provider>)
}
export default ModalContext
