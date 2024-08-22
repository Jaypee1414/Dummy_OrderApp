import React from 'react'
import Modal from '../UI/Modal'

function Error({title, message}) {
  return (
    <div className='modal'>
        <h2 className='error'>{title}</h2>
        <p className='error'>{message}</p>
    </div>
  )
}

export default Error