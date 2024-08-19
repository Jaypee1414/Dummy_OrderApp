import React from 'react'

function CheckOutInput({name, ...props}){
  return (
    <div className='control'>
      <label htmlFor={name}>{name}</label>
      <input required {...props}/>
    </div>
  )
}

export default CheckOutInput
