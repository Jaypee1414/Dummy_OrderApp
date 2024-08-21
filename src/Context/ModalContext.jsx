import { createContext, useState } from "react"

const  ModalContext = createContext({
    progress:  '', 
    showCart: () => {}, 
    hideCart: () => {}, 
    showCheckout: () => {}, 
    hideCheckout: () => {}, 
    showSuccess: () => {}, 
})


export function ModalCartProvider({children}) {

    const [modalProgress, setModalProgress] = useState('')

    function showSuccess(){
        setModalProgress('success')
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
 
    const modalCartValue = {
        progress: modalProgress,
        showCart,
        hideCart,
        showCheckout, 
        hideCheckout,
        showSuccess
    }

    return (<ModalContext.Provider value={modalCartValue}>{children}</ModalContext.Provider>)
}
export default ModalContext
