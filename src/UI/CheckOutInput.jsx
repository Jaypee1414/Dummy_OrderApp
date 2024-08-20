import React from 'react'

function CheckOutInput({id,name, type, ...props}){
  return (
    <div className='control'>
      <label htmlFor={id}>{name}</label>
      <input required name={name} id={id} type={type}/>
    </div>
  )
}

export default CheckOutInput
