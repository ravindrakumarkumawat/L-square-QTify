import React from 'react'
import './BaseInput.css'

function BaseInput({value, type, handleChange, ...restProps}) {
  return (
    <input
      className="base__input"
      value={value}
      type={type || "text"}
      {...restProps}
      onChange={handleChange}
    />
  )
}

export default BaseInput