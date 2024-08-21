import React from 'react'
import Modal from '../UI/Modal'

function Error({title, message}) {
  return (
    <>
        <p>{title}</p>
        <p>{message}</p>
    </>
  )
}

export default Error