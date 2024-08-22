import React from 'react'

function Message({title, message}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{message}</p>
    </>
  )
}

export default Message
