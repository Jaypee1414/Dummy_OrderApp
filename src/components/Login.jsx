import React, { useEffect, useRef, useState } from 'react'

function Login() {
    const email  = useRef()
    const password  = useRef()
    const dialog  = useRef()
    const [error, setError] = useState(false)
    function handleLogin(event){
        event.preventDefault()

        const emailValue = email.current.value
        const passwordValue = password.current.value

        const validate = emailValue.includes('@')

        if(validate){
            console.log('Error')
            setError(true)
        }
    }

    useEffect(() => {
        if (error) {
          dialog.current.showModal();
        } else {
          dialog.current.close();
        }
      }, [error]);
    
      function handleClose(){
        setError(false)
      }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input  ref={email}/>
        <input type="password" ref={password}/>
        <button>Login</button>
      </form>

    <dialog className="modal" ref={dialog}>
      <button onClick={handleClose}>Close</button>
    </dialog>
    </div>
  )
}

export default Login
