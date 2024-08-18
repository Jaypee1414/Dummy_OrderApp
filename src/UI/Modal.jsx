import React, { useEffect, useRef} from 'react'
import { createPortal } from 'react-dom'

function Modal({open, className = '', children}) {
    const dialog = useRef()
    useEffect(()=>{
        if(open){
            dialog.current.showModal()
        }
    },[open])
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>, document.getElementById('modal')
  )
}

export default Modal
