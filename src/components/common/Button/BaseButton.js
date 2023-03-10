import React from 'react'
import classNames from "classnames";
import './Button.css';

function BaseButton({primary, secondary, tertiary, disabled, link, children, ...restProps}) {
  const isPrimary = !(secondary || tertiary || link)
  return (
    <button
      className={classNames("btn", {
        button__primary: isPrimary,
        button__secondary: secondary,
        button__tertiary: tertiary,
        button__link: link,
        button__disabled: disabled
      })}
      {...restProps}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default BaseButton